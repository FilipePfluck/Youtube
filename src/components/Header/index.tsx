import React, {useState} from 'react'

import { 
    FiMenu, 
    FiSearch, 
    FiVideo,
    FiGrid,
    FiBell
} from 'react-icons/fi'

import { 
    MdVideoCall, 
    MdApps,
    MdNotifications
} from 'react-icons/md'

import Logo from '../../assets/logo.png'

import * as S from './styles'

interface HeaderProps{
    toggleBar(isOpened: boolean): void
}

const Header: React.FC<HeaderProps> = ({toggleBar}) => {

    const [isOpened, setIsOpened] = useState(false)

    return(
        <S.Container>
            <S.LeftContent>
                <FiMenu 
                    color='#FFF' 
                    size={24}
                    onClick={()=>{
                        toggleBar(!isOpened)
                        setIsOpened(state => !state)}
                    }
                />
                <img src={Logo} alt=""/>
                <h1>YouTube</h1>
            </S.LeftContent>

            <S.CenterContent>
                <div>
                    <input placeholder="Pesquisar" type="text"/>
                    <button>
                        <FiSearch size={14} color='#999999'/>
                    </button>
                </div>
            </S.CenterContent>

            <S.RightContent>
                <MdVideoCall size={24} color="#FFFFFF"/>
                <MdApps size={24} color="#FFFFFF"/>
                <MdNotifications size={24} color="#FFFFFF"/>

                <S.AccountCircle>F</S.AccountCircle>
            </S.RightContent>
        </S.Container>
    )
}

export default Header