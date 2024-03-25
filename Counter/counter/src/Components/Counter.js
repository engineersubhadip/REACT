import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function(){
        setData(1000000009)
        setLoading(false);
    },5000)
  }, []);

  if (loading) {
    console.log("Printed once");
    return <div>Loading...</div>;
  }

  return <div>Data: {data}</div>;
};

export default DataFetcher