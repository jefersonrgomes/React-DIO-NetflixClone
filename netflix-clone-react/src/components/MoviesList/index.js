import React, { useState, useEffect } from 'react'
import tmdb from './tmdb';
import * as S from './styles'
export function MovieList() {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list)
        }
        loadAll();
    }, [])

    return (
        <S.Container>

            <section className='lists'>

                {movieList.map((item, key) => (
                    <div>
                        {item.title}
                        </div>
                )
                )
                }

            </section>

        </S.Container>
    )
}

export default MovieList;