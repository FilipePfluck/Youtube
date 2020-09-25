import React from 'react'

import {
    MdHome,
    MdWhatshot,
    MdSubscriptions,
    MdVideoLibrary
} from 'react-icons/md'

import * as S from './styles'

const LeftBar: React.FC = () => {
    return(
        <S.Container>
            <S.LeftBarItem>
                <MdHome size={24} color="#fff"/>
                <p style={{color: '#fff'}}>Início</p>
            </S.LeftBarItem>

            <S.LeftBarItem>
                <MdWhatshot size={24} color="#909090"/>
                <p>Em alta</p>
            </S.LeftBarItem>

            <S.LeftBarItem>
                <MdSubscriptions size={24} color="#909090"/>
                <p>Inscrições</p>
            </S.LeftBarItem>

            <S.LeftBarItem>
                <MdVideoLibrary size={24} color="#909090"/>
                <p>Biblioteca</p>
            </S.LeftBarItem>
        </S.Container>
    )
}

export default LeftBar