/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import tmdb from '../utils/tmdb';
import * as S from './styles'
export function MoviesRowList({ title, items }) {


    return (
        <S.Container>
            <S.Title>
                <h2>
                    {title}
                </h2>
            </S.Title>
            <div className='movieRow--listArea'>

                <div className='movieRow--list'>
                    {items.results.length > 0 && items.results.map((item, key) => (

                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} title={item.original_title} />
                        </div>

                    ))}
                </div>

            </div>
        </S.Container>
    )
}

export default MoviesRowList;