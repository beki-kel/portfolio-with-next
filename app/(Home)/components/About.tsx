import React from 'react'
import { GlareCard } from "../../../components/ui/glare-card";
import { FaSchool } from 'react-icons/fa6';
import { SiCisco, SiCoursera } from 'react-icons/si';
import { Button } from "@/components/ui/button"


const About = () => {
return (
    <div className='min-h-screen w-full bg-slate-950 text-white'>
        <h1 className='w-full text-center pt-12 text-3xl  font-semibold'> Education And Cerificate</h1>
        <div className='w-full flex flex-wrap justify-center gap-5 mt-12 '>
            
            <GlareCard className="flex flex-col  justify-center items-center ">
                <FaSchool className='text-7xl'/>
                <p className="text-white font-semibold text-xl mt-4">
                    High School Diploma
                </p>
                <p className=' text-center text-gray-500'> Sanit Joseph Catholic School,Adama</p>
                <Button className='bg-black shadow-sm shadow-gray-400 mt-16'> Certificate</Button>
            </GlareCard>

            <GlareCard className="flex flex-col px-4  items-center justify-center">
                <SiCoursera className='text-7xl '/>
                <p className="text-white font-semibold text-xl text-center mt-4">
                    Developing Front-End Apps with React
                </p>
                <p className=' text-center text-gray-500'> Coursera</p>
                <Button className='bg-black shadow-sm shadow-gray-400 mt-16'> Certificate</Button>
            </GlareCard>

            <GlareCard className="flex flex-col  items-center justify-center">
                <SiCoursera className='text-7xl '/>
                <p className="text-white font-semibold text-xl text-center mt-4">
                    Developing Back-End Apps with Node.js and Express
                </p>
                <p className=' text-center text-gray-500'> Coursera</p>
                <Button className='bg-black shadow-sm shadow-gray-400 mt-16'> Certificate</Button>
            </GlareCard>

            <GlareCard className="flex flex-col  items-center justify-center">
                <SiCisco className='text-7xl'/>
                <p className="text-white font-semibold text-xl text-center mt-4">
                    Netwroking Essentials
                </p>
                <p className=' text-center text-gray-500'>Cisco</p>
                <Button className='bg-black  shadow-sm shadow-gray-400 mt-16 rounded-sm cursor-pointer hover:opacity-70'> Certificate</Button>
            </GlareCard>
        </div>
        
    </div>
)
}

export default About
