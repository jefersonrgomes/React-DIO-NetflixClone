import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieBanner from './components/MovieBanner';
import MovieList from './components/MoviesList';

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll();
  }, [])

  return (
    <div>

      <Header />
      <MovieBanner />
      <MovieList />
      <Footer />

    </div>
  )
}

export default Home;
