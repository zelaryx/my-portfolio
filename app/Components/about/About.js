import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "https://i.ibb.co/cC86BF4/PNG-image-DF50-CB08020-F-1.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        I'm excited to explore a career in electrical and computer engineering, using my skills in hardware and software to take on challenging projects and find creative solutions.
        </p>
        <a href='https://drive.google.com/file/d/17_uuPoWcbx3WSmr3tTn620NI8sBZAQ2E/view?usp=sharing' className='btn' download={"Alyssa's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Placeholder
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Placeholder</h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Placeholder</h3>
            <span className='skills__number'>40%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About