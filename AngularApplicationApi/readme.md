##POST

curl -d '{"id":"2","time":"2023-01-29T08:24:32","latitude":28.38803482055664,"longitude":-80.60678100585938,"altitude":-31,"pressure":1025.8500000000001,"altitudePressure":-104.38,"height":-0.11,"velocityX":0,"velocityY":0,"velocityZ":0,"horizontalAc
curacy":10,"verticalAccuracy":4,"speedAccuracy":4,"timeReceived":"2023-01-29T08:24:32.341412","uasId":"1596F350916066929723","seqNumber":21,"geoHash":"djn9mxzumc5x","insideRegion":true,"belowMaxAltitude":true,"inOtherRegion":false,"myRegionInvaded":false,"private":false,"flightId":"0af0624f-b2b5-4
9de-99e7-aa77d0eca24f"}' -H 'Content-Type: application/json' -X POST http://localhost:3000/api/dronetag/positionreport

##GET

http://localhost:3000/api/dronetag/positionreport/1