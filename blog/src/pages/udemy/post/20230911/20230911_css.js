import styled from 'styled-components'

export const PostBackgroundDiv = styled.div`
    position: absolute;
    top: 20vh;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 80vh;
    width: 80vw;

    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
`

export const PostContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 80vh;
    width: 70vw;

    border: 1vh solid black;
`

export const PostEmptyDiv = styled.div`
    min-height: 15vh;
    width: 80vw;
`

