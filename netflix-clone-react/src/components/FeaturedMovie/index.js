import React from 'react'
import * as S from './styles'

export function FeaturedMovie({ item }) {
    return (
        <S.Container>
            <section className='featured'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                {item.original_name}
            
            <div className='featured--vertical'>

            </div>
            </section>
        </S.Container>
    )
}

export default FeaturedMovie;