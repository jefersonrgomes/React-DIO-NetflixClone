import React from 'react'
import * as S from './styles'
import netflixLogo from '../../assets/images/NetflixLogo2.png'
import netflixAvatar from '../../assets/images/avatar.png'

export function Header({black}) {
    return (
        //testColor esta sendo estilizado no arquivo FeaturedMovie/Styles.js
        <S.Container className={black ? 'testeColor' : ''}>
                <div className='header--logo'>
                    <a href='/#'>
                        <img src={netflixLogo} alt="Netflix" />
                    </a>
                </div>

                <div className='header--user'>
                    <a href='/#'>
                        <img src={netflixAvatar} alt="Netflix" />
                    </a>
                </div>
        </S.Container>
    )
}

export default Header;
//  <div  >