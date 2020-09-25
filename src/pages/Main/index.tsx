import React, {useState, useCallback} from 'react'

import Header from '../../components/Header'
import LeftBar from '../../components/LeftBar'
import OpenedLeftBar from '../../components/OpenedLeftBar'
import VideoList from '../../components/VideosList'

import * as S from './styles'

const Main: React.FC = () => {
    const [isLeftBarOpened, setIsLeftBarOpened] = useState(false)

    const toggleLeftBar = useCallback((isOpened: boolean)=>{
        setIsLeftBarOpened(isOpened)
    },[])

    return(
        <S.Container>
            <Header toggleBar={toggleLeftBar}/>
            <S.Content>
                {isLeftBarOpened && (<OpenedLeftBar/>)}
                {!isLeftBarOpened && (<LeftBar/>)}
                <VideoList/>
            </S.Content>
        </S.Container>
    )
}

export default Main