import styled from "styled-components";

export const CodeSpaceBackgroundDiv = styled.div`
    height: auto;
    width: 60vw;

    margin-left: auto;
    margin-right: auto;
    background-color: beige;
    padding: 3vh;
`

export const CodeSpaceText = styled.p`
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    margin: 0 .5vw 0 0;

    font-family: 'Oswald';
    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const CodeSpaceOneLine = styled.div`
    display: flex;
    flex-direction: row;
`