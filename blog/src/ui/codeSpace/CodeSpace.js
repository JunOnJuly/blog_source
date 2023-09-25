import * as s from './CodeSpace_css'


export default function CodeSpace() {
    return(
        <s.CodeSpaceBackgroundDiv>
            <TextBeforeColor
            text="// 주석 테스트
            protected null
            if ( HitObject )
            bool GameObject"/>
        </s.CodeSpaceBackgroundDiv>
    )
}

const TextBeforeColor = (props) => {
    const SplittedTextLine = props.text.split('\r ')    
    return(
        <>
            {
                SplittedTextLine.map((line, index) => {
                    return(
                        <TextBeforeColorLine
                        line={line}
                        key={index}
                        />
                    )
                })
            }
        </>
    )
}

const TextBeforeColorLine = (props) => {
    const line = props.line.split(' ')

    const ColorDict = {
        'protected': 'blue',
        'null': 'blue',
        'if': 'blue',
        'HitObject' : 'darkolivegreen',
        'bool' : 'darkolivegreen',
        'GameObject': 'darkolivegreen',
    }

    const SplittedText = line.map((text, index) => (
        text.split(' ')
        ))
    
    console.log(SplittedText);

    if (SplittedText[0] == '//')
    {
        return(
            <s.CodeSpaceOneLine>
                {SplittedText.map((word, index) => {
                    return(
                        <s.CodeSpaceText
                        color='grey'
                        key={index}>
                            {word}
                        </s.CodeSpaceText>
                    )
                })}
            </s.CodeSpaceOneLine>
        )
    }
    else
    {
        return(
            <s.CodeSpaceOneLine>
                {SplittedText.map((word, index) => {
                    {
                        if (word in ColorDict)
                        {
                            return(
                                <s.CodeSpaceText
                                color={ColorDict[word]}
                                key={index}
                                >
                                    {word}
                                </s.CodeSpaceText>
                            )
                        }
                        else
                        {
                            return(
                                <s.CodeSpaceText
                                color='black'
                                key={index}
                                >
                                    {word}
                                </s.CodeSpaceText>
                            )
                        }
                }
                })}
            </s.CodeSpaceOneLine>
        )
    }
}