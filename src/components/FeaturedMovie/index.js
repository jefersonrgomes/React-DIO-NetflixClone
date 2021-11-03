/* eslint-disable no-unused-vars */
import React from 'react'
import * as S from './styles'
import Header from '../Header'

export function FeaturedMovie({ item, black }) {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    //criando uma variavel para receber arrays
    let genres = [];
    //criando um laço for que percorrera todos itens dentro do arrai genres (*genero de filmes)
    for (let i in item.genres) {
        //para cada item encontrado, ira adicionar (.push) o valor de nome correspondente ao index do genero que esta passando pelo iterador no momento ('[i]')
        genres.push(item.genres[i].name);
    }

    return (
        <S.Container>
            <Header black={black} />

            <section className='featured'
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                }}>

                <div className='featured--vertical'>
                    <div className='featured--horizontal'>
                        <div className='featured--name'> {item.original_name} </div>
                        <div className='featured--info'>
                            <div className='featured--points'>{item.vote_average} Pontos</div>
                            <div className='featured--year'>{firstDate.getFullYear()}</div>
                            <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
                            <div className='featured--overview'>{item.overview}</div>
                            <div className='featured--buttons'>
                                <a href="/#" className='featured--watchButton'>Assistir</a>
                                <a href="/#" className='featured--myListButton'>+ Minha Lista</a>
                            </div>
                            <div className='featured--genres'>
                                <strong>Gêneros: </strong>
                                {genres.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </S.Container>
    )
}

export default FeaturedMovie;
