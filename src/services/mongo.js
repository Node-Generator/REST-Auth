import { MongoClient } from 'mongodb';
import config from '../config.js';

const { url, dbName } = config.mongo;
const client = new MongoClient(url);

await client.connect();
const db = client.db(dbName);

export const getCollection = (collectionName) => db.collection(collectionName);

export const userCollection = () => db.collection('user');
