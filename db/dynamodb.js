const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIA3QYVBD4HUK7V4KQT", 
  secretAccessKey: "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"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
module.exports = dynamodb;