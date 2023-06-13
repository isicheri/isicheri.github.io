import React from 'react'
import { SkillCon, MainCon } from './Skills.styles'
import {FaJava,FaReact,FaGit,FaNodeJs} from "react-icons/fa"
import {SiJavascript,SiSpringboot,SiExpress,SiNestjs,SiStyledcomponents,SiGnubash,SiCss3,SiTypescript} from "react-icons/si"
// import {BiLogoNodejs,BiLogoHtml5,BiLogoCss3} from "react-icons/bi"
import {AiFillHtml5} from "react-icons/ai"
import Carousel from 'react-elastic-carousel'


// import Sliider from '../Slider/Sliider'

const Skills = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  
  return (
    <SkillCon id='skills'>
<MainCon>
  <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
 {
  skillSet.map(({id,skill}) => (
    <div className="card" key={id}>
    <div className="card__content">
      {
        skill
      }
    </div>
    </div> 
  ))
 }
  </Carousel>
</MainCon>

    </SkillCon>
  )
}

const skillSet = [
  {
    id: 0,
    skill: <AiFillHtml5 size={"2rem"} color='white'/>
  },
  {
    id: 1,
    skill: <SiCss3 size={"2rem"} color='white' />
  },
  {
    id: 2,
    skill: <SiJavascript size={"2rem"} color='white' />
  },
  {
    id: 3,
    skill: <FaJava size={"2rem"} color='white' />
  },
{
  id: 4,
  skill: <FaReact size={"2rem"} color='white'/>
},
{
  id: 5,
  skill: <SiStyledcomponents size={"2rem"} color='white' />
},
{
  id: 6,
  skill: <FaNodeJs size={"2rem"} color='white' />,
},
{
  id: 7,
  skill: <SiExpress size={"2rem"} color='white' />
},
{
  id: 8,
  skill: <SiSpringboot size={"2rem"} color='white'/>
},
{
  id: 9,
  skill: <SiNestjs size={"2rem"} color='white'/>
},,
{
  id: 10,
  skill: <FaGit size={"2rem"} color='white'/>
},
{
  id: 11,
  skill: <SiGnubash size={"2rem"} color='white'/>
},
{
  id: 12,
  skill: <SiTypescript size={"2rem"} color='white'/>
}
]

export default Skills