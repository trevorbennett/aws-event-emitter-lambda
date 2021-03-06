# aws-event-emitter-lambda

A small demonstration of using AWS SAM (servless application model) to generate two lambdas, one that generates an event, and one that recieves an event.

The SAM template will also generate the rule and pattern used to trigger the second lambda based on the first.

> Note: the flow is [emitter lambda] -> [eventbridge rule] -> [target lambda]


### Terminology

Emitter - Generates event or series of events

Reciever - Lambda called as the target of event bridge rule

Rule - JSON validation policy within Eventbridge that, upon matching within the correct account and bus, calls a target


### Deploying Resources

Build the AWS resources with `sam build`

Deploy using SAM guided deployment with `sam deploy --guided --profile my-test-iam-profile` in order to deploy the two lambdas and eventbridge rule

If you'd like to see a sample fo the generated samconfig.toml file, there is one available in the root directory at samconfig.toml.sample, but you still need to provide a deployment bucket and your IAM profile to be able to successfully deploy the provided example resources within this project.