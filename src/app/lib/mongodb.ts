// lib/mongodb.js
import { MongoClient } from 'mongodb';

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient:MongoClient|null = null;
let cachedDb = null;


export async function connectToDatabase() {
  // Если подключение уже установлено, возвращаем его
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (!dbName) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
  }


  // Если нет - устанавливаем новое соединение
  const client = await MongoClient.connect(uri);

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
