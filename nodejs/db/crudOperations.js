var db = require('./dynamodb');

let createParams = {
	TableName: "Items",
	Item: {}
};

let updateParams = {
	TableName: "Items",
	Key: {},
	ReturnValues: "ALL_NEW"
};

let getParams = {
	TableName: "Items",
	ExpressionAttributeNames: {},
	ProjectionExpression: "",
	ExpressionAttributeValues: {},
	FilterExpression: ""
};

let deleteParams = {
	TableName: "Items",
	Key: {}
};

const ifExists = ( object, key, index, prefix = "") => {
	const k = prefix + key.slice(0, index);

	if ( !(k in object) ) {
		if ( prefix === "" ) return k;
		return k.slice(1, key.length);
	}
	else {	
		return ifExists(object, key, index + 1, prefix);
	}
};

const cleanGet = () => {
	delete getParams['ExpressionAttributeNames'];
	delete getParams['ProjectionExpression'];
	delete getParams['ExpressionAttributeValues'];
	delete getParams['FilterExpression'];
};

const upsert = item => {
	for (let [key, value] of Object.entries(item)) 
		createParams.Item[key] = value
	
	return db.put(createParams, (err, data) => {
		if (err) {
			console.error("Unable to create the item. Error JSON:", JSON.stringify(err, null, 2));
			return err;
		}
		else {
			console.log("Create Item succeeded.");
			return data;
		}
	});
};

const get = ( cols = null, filter = null ) => {
	cleanGet();

	if( cols !== null ){
		getParams.ExpressionAttributeNames = {};
		getParams.ProjectionExpression = "";
	
		cols.forEach( col => {
			let c = "#" + ifExists(getParams.ExpressionAttributeNames, col.toUpperCase(), 1, "#");
			getParams.ExpressionAttributeNames[c] = col;
			getParams.ProjectionExpression += c + ", ";
		});	
	}

	if ( filter !== null ) {
		getParams.ExpressionAttributeValues = {};
		getParams.FilterExpression = "";

		for (let [key, value] of Object.entries(filter)) {
			const k = ":" + ifExists(getParams.ExpressionAttributeValues, key.toLowerCase(), 1, ":");
			getParams.ExpressionAttributeValues[k] = value;
			getParams.FilterExpression += key + " = " + k + ", ";
		}
		getParams.FilterExpression = getParams.FilterExpression.slice(0, -2);
	}

	return db.scan(getParams, (err, data) => {
		if (err) {
			console.error("Unable to get the items. Error JSON:", JSON.stringify(err, null, 2));
			return err;
		}
		else {
			console.log("Get Items succeeded.", data);
			return data;
		}
	});
};

const update = ( item, keys = ['id'] ) => {
	updateParams.UpdateExpression = "SET";
	updateParams.ExpressionAttributeNames = {};
	updateParams.ExpressionAttributeValues = {};

	keys.forEach( key => updateParams.Key[key] = item[key] );

	for (let [key, value] of Object.entries(item)) {
		if( !(keys.includes(key)) ){
			const k = ifExists(updateParams.ExpressionAttributeNames, key.toUpperCase(), 1, "#");
			const keyUp = "#" + k;
			const keyLow = ":" + k.toLowerCase();
	
			updateParams.ExpressionAttributeNames[keyUp] = key;
			updateParams.ExpressionAttributeValues[keyLow] = value;
			updateParams.UpdateExpression += " " + keyUp + " = " + keyLow + ",";
		}
	}
	updateParams.UpdateExpression = updateParams.UpdateExpression.slice(0, -1);

	return db.update(updateParams, (err, data) => {
		if (err) {
			console.error("Unable to update the item. Error JSON:", JSON.stringify(err, null, 2));
			return err;
		}
		else {
			console.log("Update Item succeeded.", data);
			return data;
		}
	});
};

const eliminate = ( key, conditions = null ) => {
	deleteParams.Key = key;

	if ( conditions !== null ) {
		deleteParams.ExpressionAttributeValues = {};
		deleteParams.ConditionExpression = "";
		let i = 0;
		conditions.forEach( condition => {
			i++;
			deleteParams.ExpressionAttributeValues[':val' + i] = condition.value;
			deleteParams.ConditionExpression += `${condition.col} ${conditions.operation} :val${i}, `;
		});
		deleteParams.ConditionExpression = deleteParams.ConditionExpression.slice(0, -2);
	}

	return db.delete(deleteParams, (err, data) => {
		if (err) {
			console.error("Unable to delete the item. Error JSON:", JSON.stringify(err, null, 2));
			return err;
		}
		else {
			console.log("Delete Item succeeded.");
			return data;
		}
	});
};

module.exports = {
	upsert,
	update,
	get,
	eliminate
};