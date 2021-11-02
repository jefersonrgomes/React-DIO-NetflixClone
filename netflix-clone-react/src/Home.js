import React, { useEffect } from 'react';
import tmdb from './tmdb';


function Home() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, [])

  return (
    
      <h1>Testando REact App</h1>
    
  )
}

export default Home;
