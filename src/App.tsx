// Packages

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Header from './components/Header/Header';
import Wilders from './components/Wilders/Wilders';

function App(): JSX.Element {
  const [wilders, setWilders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/api/wilder/read');
        setWilders(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <>
      <div>is Loading ...</div>
    </>
  ) : (
    <>
      <Header />
      <Wilders wilders={wilders} setWilders={setWilders} />
    </>
  );
}

export default App;
