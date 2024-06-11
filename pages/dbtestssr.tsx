import Image from "next/image";
import { useState, useEffect, use } from 'react';

import { usePathname } from "next/navigation";

import { headers } from 'next/headers';




export async function getServerSideProps(){
  const url = process.env.HOST;
  console.log(url);
  const response = await fetch(url + 'api/test');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data : JSON.parse(JSON.stringify(data)),
      path: url
    },
  };
}



export default function Home({ data }: { data: any }, {path}: {path: any}) {
  const [datay, setData] = useState(null);
  const [newd, setNew] = useState(false);
  async function fetchData() {
    // Assuming you have an endpoint to fetch data from, replace '/api/data' with your actual data endpoint
    const response = await fetch('/api/test');
    const newData = await response.json();
    data = newData;
    setData(newData);
    setNew(true);
  }
  if (newd == false){
    return (
      <div>
        <h1>DATA</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={fetchData}>Fetch Data</button>
        {path}
      </div>
    );
  }else{
    return (
      <div>
        <h1>DATA</h1>
        <pre>{JSON.stringify(datay, null, 2)}</pre>
        <button onClick={fetchData}>Fetch Data</button>
        {path}
      </div>
    );
  }
  
}