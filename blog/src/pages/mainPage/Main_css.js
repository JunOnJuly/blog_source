import styled from 'styled-components'

export const MainBackgroundDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 80vw;

    background-color: white;

    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
`

export const MainTextDiv = styled.div`
    width: 40vw;
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: min(0.5vh, 1vw) solid black;
    background-color: white;

    color: black;

    &:hover {
        width: 50vw;
        height: 50vh;
        color: white;
        background-color: black;
        transition: 0.5s all;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }

    z-index: 1;
`

export const MainTitleText = styled.p`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(8vh, 16vw);
    margin: 0;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const MainContentText = styled.p`
    font-family: 'Oswald';
    font-size: min(6vh, 12vw);
    margin: 1vh;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const MainLeftLineDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    height: 100vh;
    width: 40vw;
    border-right: min(0.25vh, 0.5vw) solid black;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    overflow: hidden;

    &:hover {
        color: white;
        background-color: black;
        transition: 0.5s all;
        z-index: 4;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }

`

export const MainRightLineDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    height: 100vh;
    width: 40vw;
    border-left: min(0.25vh, 5vw) solid black;

    display: flex;
    align-content: start;
    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;

    overflow: hidden;

    &:hover {
        color: white;
        background-color: black;
        transition: 0.5s all;
        z-index: 4;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }

`

export const SubContentText = styled.p`
    font-family: 'Oswald';
    position: ${props => props.textmul ? 'absolute' : 'relative'};

    top: ${props => {
        if(props.top <= 0.25){
            return '0'
        } else if(props.top <= 0.5){
            return '20vh'
        } else if (props.top <= 0.75){
            return '40vh'
        } else if (props.top <= 1){
            return '60vh'
        } else {
            return 0
        }
    }};
    left: ${props => {
        if(props.left <= 0.25){
            return '0vw'
        } else if(props.left <= 0.5){
            return '5vw'
        } else if (props.left <= 0.75){
            return '10vw'
        } else if (props.left <= 1){
            return '15vw'
        } else {
            return 0
        }
    }};
    font-size: ${props => {
        if(props.textmul <= 0.25){
            return '4vh'
        } else if(props.textmul <= 0.5){
            return '8vh'
        } else if (props.textmul <= 0.75){
            return '12vh'
        } else if (props.textmul <= 1){
            return '16vh'
        } else {
            return '6vh'
        }
    }};

    margin: 0 1vh;

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`