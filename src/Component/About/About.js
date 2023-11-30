import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function About() {
  return <>
  <section id='about' className='about-container'>
    <div className='about-left'>
        <div className='about-Me'>
            <span>About Me</span>
        </div>
        <div className='head-about'>Why Hire Me For Your Next <span>Projects</span> ... </div>
        <div className='about-sentence'>A passionate Full stack developer with the goal of working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. I primarily work with MERN stack among the full stack technologies. The satisfaction that I get while working and completing every project made me do more and more. And I believe, I have did something creatively.</div>
    <button className='hire'>Hire Me</button>
    </div>
    <div className='about-right'>
        <div className='abt-one'>
        <div className='sub-container-about'>
            <div className='icon-about'><FontAwesomeIcon icon="fa-solid fa-gem" /></div>
            <div className='role'>Full Stack Developer</div>
            </div>
        <div className='sub-container-about'>
            <div className='icon-about'>
            <FontAwesomeIcon icon="fa-solid fa-gem" />
            </div>
            <div className='role'>Frontend Developer</div>
             </div>
        </div>
        <div className='abt-two'>
        <div className='sub-container-about'>
            <div className='icon-about'><FontAwesomeIcon icon="fa-solid fa-gem" /></div>
            <div className='role'>Backend Developer</div>
           </div>
        </div>
    </div>
  </section>
  </>
}

export default About
library.add(fab, fas, far)