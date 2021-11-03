/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import * as S from './styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function MoviesRowList({ title, items }) {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW)  > x )
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }
    return (
        <S.Container>
            <S.Title>
                <h2>
                    {title}
                </h2>
            </S.Title>

            <div className="movieRowLeft" onClick={handleLeftArrow}>
                <ArrowBackIosIcon style={{ fontSize: 30 }} />
            </div>

            <div className='movieRowRight' onClick={handleRightArrow}>
                <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>

            <div className='movieRow--listArea'>

                <div className='movieRow--list'
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
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