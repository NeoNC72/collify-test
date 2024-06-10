
import clientPromise from '../../lib/mongodb_l';
import type { NextApiRequest, NextApiResponse } from 'next'


const testHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_db'); // Replace with your database name
    const collection = db.collection('sample_collection'); // Replace with your collection name

    const data = await collection.find({}).toArray();

    res.status(200).json(data);   
   
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default testHandler;
