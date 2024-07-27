import React from 'react'
import NavBar from '@/components/NavBar'
import Hero from './components/Hero'
import About from "./components/About"



const page = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='w-full'>
      <NavBar/>
      </div>
      <Hero/>
      <About/>
    </div>
  )
}

export default page
