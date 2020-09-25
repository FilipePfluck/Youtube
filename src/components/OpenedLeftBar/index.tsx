import React from 'react'

import {
    MdHome,
    MdWhatshot,
    MdSubscriptions,
    MdVideoLibrary,
    MdHistory,
    MdWatchLater,
    MdThumbUp
} from 'react-icons/md'

import * as S from './styles'

const OpenedLeftBar: React.FC = () => {
    return(
        <S.Container>
            <S.Section>
                <S.Item>
                    <MdHome size={24} color="#fff"/>
                    <p style={{color: '#fff'}}>Início</p>
                </S.Item>
                <S.Item>
                    <MdWhatshot size={24} color="#909090"/>
                    <p>Em alta</p>
                </S.Item>
                <S.Item>
                    <MdSubscriptions size={24} color="#909090"/>
                    <p>Inscrições</p>
                </S.Item>
            </S.Section>

            <S.Section>
                <S.Item>
                    <MdVideoLibrary size={24} color="#909090"/>
                    <p>Biblioteca</p>
                </S.Item>
                <S.Item>
                    <MdHistory size={24} color="#909090"/>
                    <p>Histórico</p>
                </S.Item>
                <S.Item>
                    <MdWatchLater size={24} color="#909090"/>
                    <p>Assistir mais tarde</p>
                </S.Item>
                <S.Item>
                    <MdThumbUp size={24} color="#909090"/>
                    <p>Gostei</p>
                </S.Item>
            </S.Section>
            <S.Section>
                <S.Title>Inscrições</S.Title>

                <S.Item>
                    <img src="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s88-c-k-c0xffffffff-no-rj-mo" alt=""/>
                    <p>Rocketseat</p>
                </S.Item>
                <S.Item>
                    <img src="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s88-c-k-c0xffffffff-no-rj-mo" alt=""/>
                    <p>Rocketseat</p>
                </S.Item>
                <S.Item>
                    <img src="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s88-c-k-c0xffffffff-no-rj-mo" alt=""/>
                    <p>Rocketseat</p>
                </S.Item>
            </S.Section>
        </S.Container>
    )
}

export default OpenedLeftBar