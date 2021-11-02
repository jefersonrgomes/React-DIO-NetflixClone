import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieBanner from './components/MovieBanner';
import MoviesRowList from './components/MoviesRowList';
import Global from './Global.css'

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
      <section className='lists'>
        {movieList.map((item, key) => (
          <MoviesRowList key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default Home;
