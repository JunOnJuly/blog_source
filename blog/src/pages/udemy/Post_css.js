import styled from 'styled-components'

export const PostBackgroundDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 100vh;
    width: 80vw;

    background-color: white;

    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
`

export const PostTopLeftNavDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 20vw;
    height: 3vh;
`

export const PostTopLeftNavText = styled.div`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(2vh, 4vw);
    margin: 0 0 0 1vh;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover{
        font-size: min(2.5vh, 5vw);
        transition: 0.5s all;
    }
`

export const PostTopRightNavDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 10vw;
    height: 4vh;
`

export const PostTopImage = styled.img`
    width: 3vh;
    height: 3vh;
`

export const PostTitleText = styled.p`
    position: relative;

    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(4vh, 8vw);
    margin: 6vh 0 6vh 0;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostTitleBorderDiv = styled.div`
    position: absolute;
    top: 14vh;
    left: 20vw;

    width: 40vw;

    border-bottom: 0.3vh solid black;
`

export const PostBottomNav = styled.div`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 80vw;

    background-color: black;
`

export const PostBottomNavText = styled.div`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(1.5vh, 3vw);
    margin: 0;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    color: white;
`

export const PostPreviewDiv = styled.div`
    position: relative;

    min-height: 30vh;
    width: 70vw;

    border: min(0.5vh, 1vw) solid black;
    margin-bottom: 4vh;

    background-color: white;

    color: black;

    &:hover {
        background-color: black;
        transition: 0.5s all;
        color: white;

        width: 75vw;
    }
    &:not(:hover) {
        transition: 0.5s all;
    }
`

export const PostPreviewTitle = styled.p`   
    position: absolute;
    bottom: 0;
    left: 40vw;

    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(4vh, 8vw);
    margin: 1vh;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostPreviewContentDiv = styled.div`
    position: absolute;
    top: 0;
    left: 40vw;

    height: 30vh;
    width: 30vw;
`

export const PostPreviewContent = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(2vh, 4vw);
    margin: 1vh;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const PostPreviewImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;

    height: 30vh;
    width: 40vw;
`

export const PostEmptyDiv = styled.div`
    width: 80vw;
    height: 20vh;
`