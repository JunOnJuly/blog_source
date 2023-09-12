import * as s from './Post_css'
import preview20230911 from '../../images/20230911_preview.png'
import email from '../../images/post_top_email.png'
import kakao from '../../images/post_top_kakao.png'
import phone from '../../images/post_top_cell.png'

import Post20230911 from './post/20230911/20230911'

import { useState } from 'react'

const PostMesh = (props) => {
    return(
        <>
            <s.PostPreviewDiv
            onClick={() => props.setPost('20230911')}>
                <s.PostPreviewImg
                src={preview20230911} />
                <s.PostPreviewTitle>
                    2023 / 09 / 11 - 오프라인 수업
                </s.PostPreviewTitle>

                <s.PostPreviewContentDiv>
                    <s.PostPreviewContent>
                        게임엔진 개론 / 종류
                    </s.PostPreviewContent>
                    <s.PostPreviewContent>
                        UnityHub 설치
                    </s.PostPreviewContent>
                    <s.PostPreviewContent>
                        Unity 엔진 설치 - 2022.3.8
                    </s.PostPreviewContent>
                    <s.PostPreviewContent>
                        Unity 엔진 조작법
                    </s.PostPreviewContent>
                    <s.PostPreviewContent>
                        오브젝트 실습
                    </s.PostPreviewContent>
                </s.PostPreviewContentDiv>

            </s.PostPreviewDiv>
        </>
    )
}

export default function Post(props) {
    const [post, setPost] = useState(false)
    const sendSetPost = (e) => {
        setPost(e)
    }

    return(
        <s.PostBackgroundDiv>
            <s.PostTopLeftNavDiv>
                <s.PostTopLeftNavText
                onClick={() => sendSetPost(false)}>
                    {props.page}
                </s.PostTopLeftNavText>

                <>
                    {
                        post === false
                        ? null
                        : 
                        <s.PostTopLeftNavText>
                            > {post}
                        </s.PostTopLeftNavText> 
                    }
                </>
            </s.PostTopLeftNavDiv>

            <s.PostTopRightNavDiv>
                <s.PostTopImage
                src={email}/>

                <s.PostTopImage
                src={kakao}/>

                <s.PostTopImage
                src={phone}/>
            </s.PostTopRightNavDiv>


            <s.PostTitleBorderDiv />
            <s.PostTitleText>
                [유데미x스나이퍼팩토리] 10주 완성 프로젝트 캠프 - 유니티(Unity) 기초 학습 
            </s.PostTitleText>
            
            {
                {
                    false: <PostMesh setPost={sendSetPost}/>,
                    '20230911': <Post20230911 />
                }[post]
            }

            <s.PostEmptyDiv />

            <s.PostBottomNav>
                <s.PostBottomNavText>
                본 후기는 유데미-스나이퍼팩토리 10주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다.
                </s.PostBottomNavText>
                <s.PostBottomNavText>
                #프로젝트캠프 #프로젝트캠프후기 #유데미 #udemy #스나이퍼팩토리 #웅진씽크빅 #인사이드아웃 #IT개발캠프 #개발자부트캠프 #unity #유니티 #게임개발 #메타버스 
                </s.PostBottomNavText>
            </s.PostBottomNav>
        </s.PostBackgroundDiv>
    )
}