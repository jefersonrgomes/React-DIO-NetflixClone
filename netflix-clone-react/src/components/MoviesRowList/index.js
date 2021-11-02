import React, { useState, useEffect } from 'react'
import tmdb from '../../tmdb';
import * as S from './styles'
export function MoviesRowList({ title, items }) {


    return (
        <S.Container>
            <h2>{title}</h2>
            <div className='movieRow--listArea'>
                {items.results.length > 0 && items.results.map( (item, key) =>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} title={item.original_title}/>
                ))}
            </div>
        </S.Container>
    )
}

export default MoviesRowList;