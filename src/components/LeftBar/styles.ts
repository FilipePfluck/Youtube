import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 58px;

    height: 100%;
    width: 72px;

    background-color: #202020;
`

export const LeftBarItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 72px;

    background-color: #202020;
    border: none;

    transition: 0.2s;

    &:hover{
        background-color: #383838;
    }

    p{
        color: #909090;
        font-size: 12px;
        margin-top: 4px;
    }
`