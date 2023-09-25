import * as s from './CodeSpace_css'


export default function CodeSpace() {
    const ColorDict = {
        'protected': 'blue',
        'null': 'blue',
        'if': 'blue',
        'HitObject' : 'lime',
        'bool' : 'lime',
        'GameObject': 'lime',
    }

    return(
        <s.CodeSpaceBackgroundDiv>

            <s.CodeSpaceText
            color='gray'
            weight=''
            size='3vh'>
                // Text test
            </s.CodeSpaceText>

            <s.CodeSpaceText
            color='blue'
            weight=''
            size='3vh'>
                protected
            </s.CodeSpaceText>

        </s.CodeSpaceBackgroundDiv>
    )
}