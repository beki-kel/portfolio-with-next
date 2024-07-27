import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from "./components/About"
import Skill from './components/Skill'
import Projects from './components/Projects'


const page = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  )
}

export default page
