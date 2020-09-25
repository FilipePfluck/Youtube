import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 5;

    width: 100%;
    height: 58px;
    padding: 16px;

    background-color: #202020;

    svg{
        cursor: pointer;
    }
`

export const LeftContent = styled.div`
    display: flex;
    align-items: center;

    margin-left: 8px;

    img{
        width: 24px;
        height: 24px;
        
        margin-left: 16px;
    }
    
    h1{
        font-size: 16px;
        color: #fff;
        font-weight: 500;

        margin-left: 4px;
    }
`

export const CenterContent = styled.div`
    display: flex;
    
    div{
        display: flex;
        align-items: center;

        border-radius: 8px;
        height: 30px;

        input{
            width: 520px;
            height: 100%;

            border: solid 1px #303030;

            background-color: #121212;
            color: #DADADA;

            padding: 0 8px;
        }

        button{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 64px;
            height: 100%;

            background: #323232;
            border: none;

            svg{
                transition: 0.2s;
            }

            &:hover{
                svg{
                    filter: brightness(1.4);
                }
            }
        }
    }
`

export const RightContent = styled.div`
    display: flex;
    align-items: center;

    svg{
        margin: 0 16px;
    }
`

export const AccountCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 36px;
    width: 36px;
    border-radius: 50%;
    margin: 0 16px;

    background: #7E57C2;
`