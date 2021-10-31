

// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
 

 const { EventBridgeClient, PutEventsCommand } = require("@aws-sdk/client-eventbridge");
 const {fromIni} = require("@aws-sdk/credential-provider-ini");
 var credentials =  fromIni({ profile: 'orientation-bennett1430' });
 const { DynamoDBClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-dynamodb");

const handler = async (event, context) => {
    const client = new EventBridgeClient({ region: "us-east-2", credentials:credentials });

    for(dynamoDbGroupedResult in dynamoDbGroupedResults) {
        var params = {
            Entries: [
              {
                Detail: JSON.stringify({
                    banana: "banana"
                }),
                DetailType: 'STRING_VALUE',
                EventBusName: 'default',
                Resources: [
                  'STRING_VALUE',
                ],
                Source: 'event',
                Time: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
                TraceHeader: 'STRING_VALUE'
              },
            ]
          };
          const command = new PutEventsCommand(params);
    
          console.log("command:", command)
          client.send(command, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          });
    }

};

exports.lambdaHandler = handler({},{});


handler(null,null);