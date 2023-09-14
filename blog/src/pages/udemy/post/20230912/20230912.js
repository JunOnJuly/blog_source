import * as s from './20230912_css'
import { useState } from 'react'

import image1 from '../../../../images/20230912_image1.png'

export default function Post20230911(props) {
    const [object, setObject] = useState(false)
    const [review, setReview] = useState(false)

    return(
        <s.PostBackgroundDiv>

            <s.PostContentDiv>
                <s.PostTitleDiv>
                    <s.PostTitleP>
                        2일차
                    </s.PostTitleP>
                </s.PostTitleDiv>

            <s.PostSubTitleP
            onClick={() => {
                setObject(!object)
            }}>
                자습
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={object}>
                <s.PostContentBoldP>
                    오브젝트 실습 - 사람 모양 만들기
                </s.PostContentBoldP>
                <s.PostImage
                src={image1} />
            </s.PostUnderTitleDiv>

            {/* 후기 */}

            <s.PostSubTitleP
            onClick={() => {
                setReview(!review)
            }}>
                후기
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={review}>
                <s.PostContentP>
                    생각보다 금방 뚝딱뚝딱 만들더라
                </s.PostContentP>
                <s.PostContentP>
                    관절이랑 연결할 때 세밀한 좌표 조정이 피곤했다
                </s.PostContentP>
                <s.PostContentP>
                    손가락 관절은 여러분의 몫으로 남겨두겠다
                </s.PostContentP>
                    
                <s.PostReviewP>
                    자체 평가 {'<8.0 / 10.0>'} 역시 손가락이 아쉽다
                </s.PostReviewP>
            </s.PostUnderTitleDiv>
            </s.PostContentDiv>
            
            
            <s.PostEmptyDiv />
        </s.PostBackgroundDiv>
    )
}