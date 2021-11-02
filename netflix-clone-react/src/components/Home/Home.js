import React, { useEffect, useState } from 'react';
import tmdb from '../utils/tmdb';
import Header from '../Header';
import Footer from '../Footer';
import MoviesRowList from '../MoviesRowList';
import FeaturedMovie from '../FeaturedMovie';
import * as S from './styles';

function Home() {
  const [movieList, setMovieList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list)

      //Pegando o featureData
      //Realizando um filter para pegar apenas os filmes Originals Netflix
      let originals = list.filter(i => i.slug === 'ORIGINALS');
      
      //Gerando um numero aleatorio entre os filmes da sessão Originals
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));

      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);

      //console.log(chosenInfo); 
    }
    loadAll();
  }, [])

  return (
    <>
      <S.Container>
        {featureData &&
          <FeaturedMovie item={featureData} />
        }

        <section className='lists'>
          {movieList.map((item, key) => (
            <MoviesRowList key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </S.Container>

    </>
  )
}

export default Home;
