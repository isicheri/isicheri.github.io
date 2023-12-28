import React, { useState } from 'react'
import { LinkCon, MainCon, NavCon, TitleCon, Nav, IconCon, HamCon, ButtonCon } from './Navbar.styles'
import { AiFillTwitterCircle, AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from "react-icons/gr"

const Navbar = () => {

  const [toggle,setToggle] = useState(true)

  const handleToggle = () => {
if(toggle) {
setToggle(false);
}else {
  setToggle(true);
  }
  }
  return (
   <MainCon>
    <NavCon>
   

    <TitleCon>
        <h1>
          .DI
        </h1>
      </TitleCon>

      <Nav open={toggle}>
    
      <LinkCon> 
      <ul>
        {
              LinkArray.map(({id,name,to}) => (
                  <li key={id}>
                    <a href={to}>
     {
      name
     }
                    </a>
                  </li>
                ))
        }
      </ul>
      </LinkCon>
      <IconCon>
       {
       IconArray.map(({id,icon,to}) => (
        <a key={id} href={to} target='_blank' rel="noreferrer" >
         {
          icon
         }
        </a>
       ))
       }
      </IconCon>

      <ButtonCon>
        <button>
          <a href="#contact">
        let's connect
          </a>
        </button>
      </ButtonCon>

      </Nav>

      <HamCon onClick={handleToggle}>

        {
          toggle ?   <RxHamburgerMenu size={"2rem"} /> : <GrClose size={"2rem"} />
        }
     
       </HamCon>

    </NavCon>
   </MainCon>
  )
}


const LinkArray = [
  {
    id: 0,
    name: "home",
    to: "#home"
  },
  {
    id: 1,
    name: "skills",
    to: "#skills"
  }
]

const IconArray = [
  {
    id:0,
    icon: <AiFillLinkedin size={"2rem"}/>,
    to: "https://www.linkedin.com/in/dominion-isicheri-1a7a91256",
  },
  {
    id: 1,
    icon: <AiFillTwitterCircle size={"2rem"}/>,
    to: "https://twitter.com/darcck_js",
  },
  {
    id: 2,
    icon: <AiFillGithub size={"2rem"}/>,
    to: "https://github.com/isicheri/",
  }
]
export default Navbar