
import clientPromise from '../../src/lib/mongodb_l';
import type { NextApiRequest, NextApiResponse } from 'next'


const testHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const flag = process.env.MONGODB_FLAG;
  try {
    if (flag == "true"){
      const client = await clientPromise;
      const db = client.db('sample_db'); // Replace with your database name
      const collection = db.collection('sample_collection');
      const data = await collection.find({}).toArray();
      res.status(200).json(data);
    }else{
      const num = Math.random();
      const data = {"data":num};
      res.status(200).json(data); 
  }  
   
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' + e });
  }
};

export default testHandler;
