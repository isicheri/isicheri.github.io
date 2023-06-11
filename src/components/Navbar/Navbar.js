import React from 'react'
import { LinkCon, MainCon, NavCon, TitleCon, Nav, IconCon, HamCon, ButtonCon } from './Navbar.styles'
import { AiFillTwitterCircle, AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from "react-icons/gr"

const Navbar = () => {
  return (
   <MainCon>
    <NavCon>
   
      <Nav>
      <TitleCon>
        <h1>
          .D
        </h1>
      </TitleCon>
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
        <a key={id} href={to} >
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

      <HamCon>
       <RxHamburgerMenu size={"2rem"} />
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
    to: "",
  },
  {
    id: 1,
    icon: <AiFillTwitterCircle size={"2rem"}/>,
    to: "",
  },
  {
    id: 2,
    icon: <AiFillGithub size={"2rem"}/>,
    to: "",
  }
]
export default Navbar