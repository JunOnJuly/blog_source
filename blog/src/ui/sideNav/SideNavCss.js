import styled from "styled-components"

export const SideNavBackgroundDiv = styled.div`
    position: absolute;
    left: -20vw;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 20vw;

    background-color: black;
`

export const SideNavProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 30vh;
    width: 20vw;

    z-index: 2;
`

export const SideNavProfileImage = styled.img`
    width: 18vh;
    height: 18vh;
    border-radius: 50%;
`

export const SideNavProfileText = styled.p`
    width: 20vw;
    text-align: center;
    padding: 1vh 0;
    
    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(2vh, 4vw);
    color: ${props => props.open === props.name ? 'black' : 'white'};
    background-color: ${props => props.open === props.name ? 'white' : 'black'};

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        color: white;
        transition: 0.5s all;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }
`

export const SideNavMenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 60vh;
    width: 20vw;

    margin-top: 5vh;
`

export const SideNavMenuTitle = styled.p`
    width: 20vw;
    text-align: center;
    padding: 1vh 0;

    font-family: 'Oswald';
    font-weight: bold;
    font-size: min(2.5vh, 5vw);
    color: ${props => props.open === props.name ? 'black' : 'white'};
    background-color: ${props => props.open === props.name ? 'white' : 'black'};

    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        color: white;
        transition: 0.5s all;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }
`

export const SideNavMenucontentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const SideNavBorderDiv = styled.div`
    position: absolute;
    top: 0;

    height: 30vh;
    width: 10vw;

    border-bottom: 1px solid white;

    z-index: 1;
`