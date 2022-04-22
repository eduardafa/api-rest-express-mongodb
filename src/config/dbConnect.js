import mongoose from 'mongoose';
import { username, password } from './accessDb.js';

// inserting password and database name
mongoose.connect(
    `mongodb+srv://${username}:${password}@node.rddwj.mongodb.net/node-mongodb`
);

// connection
let db = mongoose.connection;

export default db;
