import styled from 'styled-components'

export const PostBackgroundDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 100vh;
    width: 80vw;

    background-color: white;
`

export const PostTitleText = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(4vh, 8vw);
    margin: 1vh 0 0 0;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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