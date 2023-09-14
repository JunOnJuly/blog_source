import * as s from './20230911_css'
import { useState } from 'react'

import image1 from '../../../../images/20230911_image1.png'

export default function Post20230911(props) {
    const [engine, setEngine] = useState(false)
    const [unity, setUnity] = useState(false)
    const [object, setObject] = useState(false)
    const [review, setReview] = useState(false)

    return(
        <s.PostBackgroundDiv>

            <s.PostContentDiv>
                <s.PostTitleDiv>
                    <s.PostTitleP>
                        1일차
                    </s.PostTitleP>
                </s.PostTitleDiv>

            <s.PostSubTitleP
            onClick={() => {
                setEngine(!engine)
            }}>
                게임 엔진
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={engine}>
                <s.PostContentBoldP>
                    게임 엔진은 개발자에게 오아시스같은 존재
                </s.PostContentBoldP>
                <s.PostContentP>
                    게임을 구동하는데 필요한 기능들을 포함
                </s.PostContentP>
                <s.PostContentP>
                    물리, 수학, 오브젝트 등을 최적화해줌
                </s.PostContentP>
                <s.PostContentP>
                    게임 엔진 이후 비주얼로 확인하며 개발 가능
                </s.PostContentP>
                <s.PostContentP>
                    게임 개발 업무 효율 극대화
                </s.PostContentP>
                
                <s.PostContentBoldP>
                    오거 엔진 ( 스크립트 전용 )
                </s.PostContentBoldP>
                <s.PostContentP>
                    멀티 플렛폼 지원
                </s.PostContentP>
                <s.PostContentP>
                    C++ 기반, 별도의 에디터 없음
                </s.PostContentP>
                <s.PostContentP>
                    오픈소스 ( MIT 에서 라이선스 보유 중 )
                </s.PostContentP>

                <s.PostContentBoldP>
                    크라이 엔진 ( 에디터 존재 )
                </s.PostContentBoldP>
                <s.PostContentP>
                    github에 소스 공개
                </s.PostContentP>
                <s.PostContentP>
                    Steam 에서 다운로드 가능
                </s.PostContentP>
                <s.PostContentP>
                    오픈소스 ( MIT 에서 라이선스 보유 중 )
                </s.PostContentP>
                <s.PostContentP>
                    기술지원을 유료
                </s.PostContentP>
                <s.PostContentP>
                    인디가 아닌 상용 게임은 문의 필요
                </s.PostContentP>

                <s.PostContentBoldP>
                    코코스 2D 엔진 ( 에디터 존재 )
                </s.PostContentBoldP>
                <s.PostContentP>
                    여러 개발자가 만든 엔진
                </s.PostContentP>
                <s.PostContentP>
                    변형하기 쉽고 개발자가 많음
                </s.PostContentP>
                <s.PostContentP>
                    2019년 이후에 프레임웍 업데이트가 멈춤
                </s.PostContentP>
            
                <s.PostContentBoldP>
                    언리얼 엔진 ( 에디터 존재 )
                </s.PostContentBoldP>
                <s.PostContentP>
                    에픽게임즈에서 개발
                </s.PostContentP>
                <s.PostContentP>
                    초기에는 상용 엔진이 아니었지만 2001년에 상용 엔진으로 출시
                </s.PostContentP>
                <s.PostContentP>
                    2015년 이후 언리얼 4부터는 부분 무료
                </s.PostContentP>
                <s.PostContentP>
                    온라인 기술 지원은 무료
                </s.PostContentP>
            
                <s.PostContentBoldP>
                    유니티 엔진 ( 에디터 존재 )
                </s.PostContentBoldP>
                <s.PostContentP>
                    수많은 멀티 플렛폼 지원
                </s.PostContentP>
                <s.PostContentP>
                    풍부한 에셋 스토어
                </s.PostContentP>
                <s.PostContentP>
                    개인버전 무료 ( 연간 총수익 10만달러 미만 )
                </s.PostContentP>
                <s.PostContentP>
                    구독모델 ( 40달러 ~ 150 달러 )
                </s.PostContentP>
            
                <s.PostContentBoldP>
                    유니티 엔진 특징
                </s.PostContentBoldP>
                <s.PostContentP>
                    다양한 플랫폼 빌드 지원 및 좋은 접근성
                </s.PostContentP>
                <s.PostContentP>
                    유료와 무료 차이는 스플래쉬 이미지에 유니티 로고 하나
                </s.PostContentP>
                <s.PostContentP>
                    다른 엔진보다 저렴한 금액의 유료버전
                </s.PostContentP>
            </s.PostUnderTitleDiv>

            <s.PostSubTitleP
            onClick={() => {
                setUnity(!unity)
            }}>
                유니티 엔진
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={unity}>
                <s.PostContentBoldP>
                    화면구성
                </s.PostContentBoldP>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/Toolbar.html'
                target='_blank'>
                    툴바 - 에디터의 기능을 컨트롤
                </s.PostUrl>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/Hierarchy.html'
                target='_blank'>
                    계층 ( 하이어라키 ) - 모든 객체에 대한 정보
                </s.PostUrl>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/ProjectView.html'
                target='_blank'>
                    프로젝트 - 에셋을 액세스 및 관리
                </s.PostUrl>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/UsingTheSceneView.html'
                target='_blank'>
                    씬 뷰 - 모든 유형의 게임 오브젝트를 선택 및 배치할 수 있는 대화형 창
                </s.PostUrl>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/GameView.html'
                target='_blank'>
                    게임 뷰 - 실제로 게임을 플레이할 때 보는 것을 제어
                </s.PostUrl>
                <s.PostUrl
                href='https://docs.unity3d.com/kr/530/Manual/UsingTheInspector.html'
                target='_blank'>
                    인스펙터 - 게임 개체, 자산의 속성과 설정, 그리고 에디터의 기타 기본 설정과 설정을 보고 편집하는 데 사용
                </s.PostUrl>

            </s.PostUnderTitleDiv>

            <s.PostSubTitleP
            onClick={() => {
                setObject(!object)
            }}>
                오브젝트
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={object}>
                <s.PostContentBoldP>
                    오브젝트 실습 - 사람 모양 만들기
                </s.PostContentBoldP>
                <s.PostImage
                src={image1} />
            </s.PostUnderTitleDiv>

            <s.PostSubTitleP
            onClick={() => {
                setReview(!review)
            }}>
                후기
            </s.PostSubTitleP>

            <s.PostUnderTitleDiv
            height={review}>
                <s.PostContentP>
                    강의 분위기가 편해서 질문하기 쉽고 좋았다
                </s.PostContentP>
                <s.PostContentP>
                    첫날이라 그런지 강의 시간이 여유로워 모르는 것도 확실히 짚고 넘어가기 좋을 것 같다
                </s.PostContentP>
                <s.PostContentP>
                    생각보다 강의장도 여유롭고 편했다
                </s.PostContentP>
                <s.PostContentP>
                    교통편도 지하철 바로 근처라 걱정은 없었지만 지옥의 백팔번뇌 계단이 하체를 고되게 했다
                </s.PostContentP>
                <s.PostContentP>
                    홍대 근처라 맛집도 많기를 기대하고 있음
                </s.PostContentP>
                <s.PostContentP>
                    사람 모양 만들기 실습 중 이빨이 너무 애기 이빨처럼 만들어져서 아쉽다 내일 자습 때 좀더 각잡고 만들어봐야지
                </s.PostContentP>
                    

                <s.PostReviewP>
                    자체 평가 {'<9.0 / 10.0>'} 하체가 고단하겠지만 운동 좀 더 하는 기분으로 1점만 감점했다
                </s.PostReviewP>
            </s.PostUnderTitleDiv>
            </s.PostContentDiv>
            
            
            <s.PostEmptyDiv />
        </s.PostBackgroundDiv>
    )
}