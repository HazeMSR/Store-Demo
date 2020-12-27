const table = {
    TableName : "Items",
    KeySchema: [       
		{ AttributeName: "id", KeyType: "HASH"},  //Partition key
		{ AttributeName: "name", KeyType: "RANGE" } //Sort key
    ],
    AttributeDefinitions: [    
        { AttributeName: "id", AttributeType: "N" },
		{ AttributeName: "name", AttributeType: "S" },
		/*{ AttributeName: "price", AttributeType: "N" },
		{ AttributeName: "stock", AttributeType: "N" },
		{ AttributeName: "description", AttributeType: "S" },
		{ AttributeName: "image", AttributeType: "S" }
	*/],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 20, 
        WriteCapacityUnits: 20
    }
};
module.exports = table;