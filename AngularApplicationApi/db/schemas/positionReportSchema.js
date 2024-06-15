const positionReportSchema = {
    title: 'Position Report Schema',
    description: 'DroneTag position report',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        "id": {
            type: 'string',
            primary: true,
            maxLength: 100
        },
        "time": {
            type: 'string',
            maxLength: 100
        },
        "latitude": {
            type: 'number'
        },
        "longitude": {
            type: 'number'
        },
        "altitude": {
            type: 'number'
        },
        "pressure": {
            type: 'number'
        },
        "altitudePressure": {
            type: 'number'
        },
        "height": {
            type: 'number'
        },
        "velocityX": {
            type: 'number'
        },
        "velocityY": {
            type: 'number'
        },
        "velocityZ": {
            type: 'number'
        },
        "horizontalAccuracy": {
            type: 'number'
        },
        "verticalAccuracy": {
            type: 'number'
        },
        "speedAccuracy": {
            type: 'number'
        },
        "timeReceived": {
            type: 'string',
            maxLength: 100
        },
        "uasId": {
            type: 'string',
            maxLength: 200
        },
        "seqNumber": {
            type: 'integer'
        },
        "geoHash": {
            type: 'string',
            maxLength: 200
        },
        "insideRegion": {
            type: 'boolean'
        },
        "belowMaxAltitude": {
            type: 'boolean'
        },
        "inOtherRegion": {
            type: 'boolean'
        },
        "myRegionInvaded": {
            type: 'boolean'
        },
        "private": {
            type: 'boolean'
        },
        "flightId": {
            type: 'string',
            maxLength: 250
        }
    },
    required: ['id']
};

module.exports = positionReportSchema;