'use client';

import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from "./components/About"
import Skill from './components/Skill'
import Projects from './components/Projects'
import Services from './components/Services'
import Loading from '@/components/Loading'


const Page  = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
}, []);

  return (
    <>
      {loading && <Loading />}
      
      {!loading && (
        <div className='min-h-screen flex flex-col'>
          <Hero/>
          <About/>
          <Skill/>
          <Projects/>
          <Services/>
        </div> )}
    </>
    
    
  )
}

export default Page
