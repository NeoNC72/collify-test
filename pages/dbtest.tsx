import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Assuming you have an endpoint to fetch data from, replace '/api/data' with your actual data endpoint
      const response = await fetch('/api/test');
      const newData = await response.json();
      setData(newData);
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>DATA</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

