
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "https://i.ibb.co/FqH5YP8/PNG-image-0409845142-DF-1.png" height={145} width={160} alt='' className='home__img'/>
    <h1 className='home__name'>Alyssa Huang</h1>
    <span className='home__education'>
    Engineer, Rock Climber, Plant Mom
    </span>

    <HeaderSocials/>

    {/* <a href='#contact' className='btn'>Hire Me</a> */}
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

