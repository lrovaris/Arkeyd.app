require('dotenv').config(); // Load .env file first

const { MongoClient, ObjectId } = require('mongodb');
const url = process.env.MONGOURL;
const dbName = 'arkeyd_exchange';
let db;

async function init_db() {
    console.log('MongoDB URL:', process.env.mongUrl);
    if (db) return db; // Return the existing db instance if already connected

    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
        console.log('Database connected successfully');
        return db;
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        throw err; // Rethrow the error after logging it
    }
}

async function get_db() {
    return db || await init_db();
}

module.exports = {
    init_db,
    get_db
};
