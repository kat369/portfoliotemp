import React from 'react'
import "./Navbar.css"
function Navbar() {
  return <>
  <section className='navbar-container'>
    <div className='navbar-left'>
      <div className='hero-name-logo'><span>K</span>athiravan</div>
    </div>
    <div className='navbar-right'>
      <div className='list-of-list'>
        <a href='#about' className='home'>Home</a>
        <div className='about'>About</div>
        <div className='skill'>Skill</div>
        <div className='project'>Project</div>
        <div className='contact'>Contact</div>
      </div>
    </div>
  </section>

  </>
}

export default Navbar