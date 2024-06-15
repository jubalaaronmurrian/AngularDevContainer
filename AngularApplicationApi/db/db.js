//https://rxdb.info/quickstart.html
//https://github.com/pubkey/rxdb/blob/master/examples/node/src/database.js

require('babel-polyfill');

const Database = {};
const { createRxDatabase,addRxPlugin } = require('../node_modules/rxdb');
const { RxDBDevModePlugin } = require('../node_modules/rxdb/plugins/dev-mode');
addRxPlugin(RxDBDevModePlugin);
const { getRxStorageMemory } = require('../node_modules/rxdb/plugins/storage-memory');

const create = async (rxDatabaseConfiguration,rxDatabaseCollections) => {

    const database = await createRxDatabase(rxDatabaseConfiguration);
    await database.addCollections(rxDatabaseCollections);
    return database;
};

let databasePromise=null;
Database.get = async (rxDatabaseConfiguration,rxDatabaseCollections) => {
    if (!databasePromise) {
        databasePromise = create(rxDatabaseConfiguration,rxDatabaseCollections);
    }
    return databasePromise;
};

module.exports = Database;