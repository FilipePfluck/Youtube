import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 58px;

    z-index: 4;

    height: 100%;
    width: 240px;

    background-color: #202020;
`

export const Section = styled.section`
    border-bottom: solid 1px #303030;
    width: 100%;

    padding: 16px 0;
`

export const Item = styled.div`
    display: flex;
    align-items: center;

    height: 48px;
    padding-left: 24px;

    p{
        color: #909090;
        font-size: 12px;
        margin-top: 4px;
        margin-left: 12px;
    }

    img{
        height: 24px;
        width: 24px;
        border-radius: 50%;
    }

    &:hover{
        background-color: #414141;
    }
`

export const Title = styled.h1`
    font-size: 18px;
    margin-left: 24px;
    color: #909090;
`