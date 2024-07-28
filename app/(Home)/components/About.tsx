"use client"
import React from 'react'
import { GlareCard } from "../../../components/ui/glare-card";
import { SiCisco, SiCoursera } from 'react-icons/si';
import { DosisText } from '../../../components/DosisText';
import { LampContainer } from "../../../components/ui/lamp";

const About = () => {
return (
    <div className='min-h-screen pb-24 w-full bg-slate-950 text-white'>
        <LampContainer >
            <h1 className='w-full text-center pt-12 text-3xl  font-semibold'> <span className={DosisText.className}>Education And Cerificate</span> </h1>
            <h3 className='w-full text-center text-xl px-32 pt-4'>Currently I am 4th year Bsc. student in Software Engineering  at Addis Ababa University, Ethiopia. <br/> Here are major certifications I have Accomplished</h3>
        </LampContainer>
        <div className='w-full flex flex-wrap justify-center gap-5 -mt-56 '>
            <GlareCard value="https://coursera.org/verify/9QTMEDS6MHRR" className="flex flex-col px-4  items-center justify-center">
                <SiCoursera className='text-7xl '/>
                <p className="text-white font-semibold text-xl text-center mt-4">
                    Developing Front-End Apps with React
                </p>
                <p className=' text-center text-gray-500'> Coursera</p>
                <p className='cursor-pointer text-xl underline decoration-white underline-offset-4 focus:text-blue-700  mt-20'> Certificate</p>
            </GlareCard>

            <GlareCard value="https://coursera.org/verify/H4FMHWKRXWZP" className="flex flex-col  items-center justify-center">
                <SiCoursera className='text-7xl '/>
                <p className="text-white font-semibold text-xl text-center mt-4 px-2">
                    Developing Back-End Apps with Node.js and Express
                </p>
                <p className=' text-center text-gray-500'> Coursera</p>
                <p className='cursor-pointer text-xl underline decoration-white underline-offset-4 focus:text-blue-700  mt-20'> Certificate</p>
            </GlareCard>

            <GlareCard value="https://www.credly.com/badges/11b0376f-eb9e-4025-a42c-30e75e1f175b/public_url" className="flex flex-col  items-center justify-center">
                <SiCisco className='text-7xl'/>
                <p className="text-white font-semibold text-xl text-center mt-4">
                    Netwroking Essentials
                </p>
                <p className=' text-center text-gray-500'>Cisco</p>
                <p className='cursor-pointer text-xl underline decoration-white underline-offset-4 focus:text-blue-700  mt-20'> Certificate</p>
            </GlareCard>
        </div>
        
    </div>
)
}

export default About
