import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  let data = {}, statusCode = 200;
  const { method, body } = req;
  
  if (method === 'POST') {
    const { title, image, address, description } = body;
    const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hhxotqv.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    const db = client.db(process.env.DATABASE_NAME);
    const collection = db.collection('meetups');
    data = await collection.insertOne({ title, image, address, description });
    console.log(data);
    await client.close();
  }

  res.status(statusCode).json(data);
}