import styled from "styled-components";

export const CodeSpaceBackgroundDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`

export const CodeSpaceText = styled.p`
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};

    font-family: 'Oswald';
    cursor:default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`