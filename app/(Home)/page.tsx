import React from 'react'
import NavBar from '@/components/NavBar'
import Hero from './components/Hero'
import About from "./components/About"
import Skill from './components/Skill'

const page = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar/>
      <Hero/>
      <About/>
      <Skill/>
    </div>
  )
}

export default page
