import Image from "next/image";
import clientPromise from '../src/lib/mongodb_l';

export async function getServerSideProps(){
  const client = await clientPromise;
  const db = client.db('test');
  const collection = db.collection('test_c');
  const data = await collection.find({}).limit(10).toArray();
  console.log(data);
  return {
    props: {
      data : JSON.parse(JSON.stringify(data)),
    },
  };
}



export default function Home({ data }: { data: any }) {
  return (
    <div>
      <h1>DATA</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
