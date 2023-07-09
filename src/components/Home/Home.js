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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid, laudantium maiores nemo quidem quis culpa assumenda mollitia reprehenderit animi explicabo, numquam repellendus nam maxime voluptatum asperiores neque quod nulla.
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