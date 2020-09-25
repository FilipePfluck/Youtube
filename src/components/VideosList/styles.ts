import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    margin-left: 72px;
    margin-top: 58px;

    padding: 24px;
`

export const Video = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;

    img{
        height: 170px;
        width: 300px;
    }
`

export const VideoInfo = styled.div`
    display: flex;
    margin-top: 8px;

    img{
        height: 36px;
        width: 36px;
        border-radius: 50%;

        margin-right: 8px;
    }

    div{
        display: flex;
        flex-direction: column;

        strong{
            font-size: 14px;
            color: #fff;

            margin-bottom: 4px;
        }

        p{
            font-size: 14px;
            color: #aaa;
        }
    }
`