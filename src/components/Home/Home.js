import React from 'react'
import { Con1, Con2, HomeCon } from './Home.styles';
import "./Home.css"

const Home = () => {
  return (
    <HomeCon id='home'>
      <Con1>
   <div className='text'>
  <h1>
    HI I'M DOMINION ISICHERI
  </h1>
  <p>
  An open-minded and passionate software developer with a knack for architecting robust and scalable solutions. Proficient in languages like javascript,typescript and solidity i specialize in crafting efficient server side logic and database management,Experienced in Restful Api design and building web3 based application, I bring commitment to optimizing performance and data security. Continuously exploring new technologies and methodologies to stay current in the technology space.
  </p>
   </div>
   <div className="button-con">
    <button>
      <a href="#contact">
        let's connect
      </a>
    </button>
   </div>
      </Con1>

      <Con2>
        <div className='image-holder'> 

        </div>
      </Con2>
    </HomeCon>
  )
}

export default Home;