import * as s from './SideNavCss'
import { useState } from 'react'
import profile_image from '../../images/profile_image.png'

export default function SideNav(props) {
    const [open, setOpen] = useState('Intro')

    const setMain = () => {
        setOpen('Intro')
        props.setPage('Intro')
    }

    const setUdemy = () => {
        setOpen('Udemy')
        props.setPage('Udemy')
    }

    return (
      <s.SideNavBackgroundDiv>

        <s.SideNavProfile>
            <s.SideNavProfileImage
            src={profile_image} />

            <s.SideNavProfileText
            onClick={() => setMain()}
            open={open}
            name='Intro'>
                JunOnJuly
            </s.SideNavProfileText>

        </s.SideNavProfile>

        <s.SideNavBorderDiv />

        <s.SideNavMenuDiv>
            <s.SideNavMenuTitle
            onClick={() => setUdemy()}
            open={open}
            name='Udemy'>
                Udemy_UnityCamp
            </s.SideNavMenuTitle>
        </s.SideNavMenuDiv>
      </s.SideNavBackgroundDiv>
    );
  }
  