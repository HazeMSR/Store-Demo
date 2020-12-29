const table = {
    TableName : "Items",
    KeySchema: [       
		{ AttributeName: "user", KeyType: "HASH"}  //Partition key
    ],
    AttributeDefinitions: [    
        { AttributeName: "user", AttributeType: "S" },
		{ AttributeName: "password", AttributeType: "N" }
	],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 20, 
        WriteCapacityUnits: 20
    }
};
module.exports = table;