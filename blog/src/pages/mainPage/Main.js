import * as s from './Main_css'
import { useState } from 'react';
import SideNav from '../../ui/sideNav/SideNav';
import Post from '../udemy/Post';

const Intro = () => {
  const [sort, setSort] = useState(true)

  const getRandom = () => {
    return sort ? Math.random() : null
  }

  return (
    <>
      <s.MainLeftLineDiv>

      <s.SubContentText
      textmul={getRandom()}
      top={getRandom()}
      left={getRandom()}>
        C
      </s.SubContentText>
      <s.SubContentText
      textmul={getRandom()}
      top={getRandom()}
      left={getRandom()}>
        JavaScript
      </s.SubContentText>
      <s.SubContentText
      textmul={getRandom()}
      top={getRandom()}
      left={getRandom()}>
        C#
      </s.SubContentText>
      <s.SubContentText
      textmul={getRandom()}
      top={getRandom()}
      left={getRandom()}>
        Python
      </s.SubContentText>
      <s.SubContentText
      textmul={getRandom()}
      top={getRandom()}
      left={getRandom()}>
        C++
      </s.SubContentText>

    </s.MainLeftLineDiv>

    <s.MainRightLineDiv>
      <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          React
        </s.SubContentText>
        <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Vue
        </s.SubContentText>
        <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Django
        </s.SubContentText>
        <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Docker
        </s.SubContentText>
        <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Unity
      </s.SubContentText>
      <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Unreal
      </s.SubContentText>
      <s.SubContentText
        textmul={getRandom()}
        top={getRandom()}
        left={getRandom()}>
          Pytorch
      </s.SubContentText>
    </s.MainRightLineDiv>

    <s.MainTextDiv
    onClick={() => {
      if (sort === false) {
        setSort(true)
      } else {
        setSort(false)
      }
    }}>

      <s.MainTitleText>
        JunOnJuly
      </s.MainTitleText>

      <s.MainContentText>
        STUDY
      </s.MainContentText>

      <s.MainContentText>
        BLOG
      </s.MainContentText>

    </s.MainTextDiv>
  </>
  )
}

export default function Main() {
  const [page, setPage] = useState('Intro')
  const sendSetPage = (e) => {
    setPage(e)
  }

  return (
    <s.MainBackgroundDiv>
      <SideNav
      setPage={sendSetPage}/>
      {
        {
          Intro: <Intro />,
          Udemy: <Post page={'Udemy'} />
        }[page]
      }
    </s.MainBackgroundDiv>
  );
  }