import styled from 'styled-components'
import * as c from '../../design/Colors'

export const MainBackgroundDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 80vw;

    background-color: ${c.Colors.main_pink};
`