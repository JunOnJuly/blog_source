import * as s from './SideNavCss'
import { useState } from 'react'

function Udemy(props) {
    return(
        <s.SideNavMenuContextDiv>

            <s.SideNavMenuContext
            onClick={() => props.setContext(20230911)}>
                2023.09.11 (수업)
            </s.SideNavMenuContext>

        </s.SideNavMenuContextDiv>
    )
}


export default function SideNav() {
    const [open, setOpen] = useState(false)
    const [context, setContext] = useState('main')

    const sendSetContext = (e) => {
        setContext(e)
    }

    const setUdemy = () => {
        if (open === 'Udemy'){
            setOpen(false)
        } else {
            setOpen('Udemy')
        }
    }

    return (
      <s.SideNavBackgroundDiv>

        <s.SideNavProfile>
            <s.SideNavBorderDiv />
        </s.SideNavProfile>

        <s.SideNavMenuDiv>
            <s.SideNavMenuTitle
            onClick={() => setUdemy()}>
                Udemy_UnityCamp
            </s.SideNavMenuTitle>
            {
                open === 'Udemy'
                ? <Udemy setContext={sendSetContext}/>
                : null
            }
            <s.SideNavMenuTitle>
                Something
            </s.SideNavMenuTitle>

        </s.SideNavMenuDiv>
      </s.SideNavBackgroundDiv>
    );
  }
  