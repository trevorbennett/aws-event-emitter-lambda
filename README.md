# aws-event-emitter-lambda

A small demonstration of using AWS SAM (servless application model) to generate two lambdas, one that generates an event, and one that recieves an event.

The SAM template will also generate the rule and pattern used to trigger the second lambda based on the first.

> Note: the flow is [emitter lambda] -> [eventbridge rule] -> [target lambda]



