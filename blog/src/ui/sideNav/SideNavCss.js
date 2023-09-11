import styled from "styled-components"
import * as c from '../../design/Colors'

export const SideNavBackgroundDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 20vw;

    background-color: ${c.Colors.main_blue};
`

export const SideNavProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 30vh;
    width: 20vw;
`

export const SideNavMenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 60vh;
    width: 20vw;

    margin-top: 10vh;
`

export const SideNavMenuTitle = styled.p`
    color: ${c.Colors.main_sand};
    font-weight: bold;
    font-size: larger;

    &:hover {
        color: ${c.Colors.white_sand};
        transition: 0.5s all;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }
`

export const SideNavMenuContextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const SideNavMenuContext = styled.p`
    color: ${c.Colors.main_sand};
    font-size: large;

    &:hover {
        color: ${c.Colors.white_sand};
        transition: 0.5s all;
    }

    &:not(:hover) {
        transition: 0.5s all;
    }
`

export const SideNavBorderDiv = styled.div`
    height: 30vh;
    width: 10vw;

    border-bottom: 1px solid white;
`