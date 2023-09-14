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
    align-items: start;

    padding-bottom: 2vh;
    min-height: 80vh;
    width: 70vw;

    border: 1vh solid black;

    transition: 0.5s all;
`

export const PostTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    min-height: 15vh;
    width: 40vw;

    border-bottom: 0.3vh solid black;
`

export const PostTitleP = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(8vh, 16vw);
    margin: 1vh 1vw;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostUnderTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    overflow: hidden;
    height: ${props => props.height? 'auto' : 0};
    width: 70vw;

    transition: 0.5s all;
`

export const PostSubTitleP = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(6vh, 12vw);
    margin: 1vh 1vw;

    &:hover{
        font-size: min(7vh, 14vw);
        transition: 0.5s all;
    }

    &:not(:hover){
        transition: 0.5s all;
    }

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostContentBoldP = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(4vh, 8vw);
    margin: 2vh auto 1vh 1vw;

    align-self: start;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostContentP = styled.p`
    font-family: 'Oswald';
    font-size: min(2.5vh, 5vw);
    margin: 1vh auto 0 1vw;

    align-self: start;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostUrl = styled.a`
    font-family: 'Oswald';
    font-size: min(2.5vh, 5vw);
    margin: 1vh auto 0 1vw;

    align-self: start;

    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-decoration-line: none;

    &:hover{
        font-size: min(3vh, 6vw);
        transition: 0.5s all;
    }

    &:not(:hover){
        transition: 0.5s all;
    }
`

export const PostImage = styled.img`
    width: 50vw;
    height: auto;
    margin-left: 1vw;
`

export const PostReviewP = styled.p`
    font-family: 'Oswald';
    font-size: min(3vh, 6vw);
    font-weight: bold;
    margin: 2vh auto 0 1vw;

    align-self: start;

    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
export const PostEmptyDiv = styled.div`
    min-height: 15vh;
    width: 80vw;
`

