//https://rxdb.info/quickstart.html
//https://github.com/pubkey/rxdb/blob/master/examples/node/src/database.js

require('babel-polyfill');

const Database = {};

const { createRxDatabase,
    addRxPlugin } = require('../node_modules/rxdb');

const { RxDBDevModePlugin } = require('../node_modules/rxdb/plugins/dev-mode');

const { getRxStorageMemory } = require('../node_modules/rxdb/plugins/storage-memory');

addRxPlugin(RxDBDevModePlugin);

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

const create = async () => {

    const database = await createRxDatabase({
        name: 'angularapplicationapidb',
        storage: getRxStorageMemory()
    });

    await database.addCollections({
        positionreport: {
            schema: positionReportSchema
        }
    });

    return database;
};

let databasePromise=null;
Database.get = async () => {
    if (!databasePromise) {
        databasePromise = create();
    }
    return databasePromise;
};

module.exports = Database;