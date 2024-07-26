import React from 'react'
import { ModeToggle } from '@/components/ModeToggle';
import  Link  from 'next/link';
import {FaLinkedin,FaGithub,FaInstagram}  from 'react-icons/fa'

type Socials ={
    name: string,
    url: string,
    icon:React.ComponentType,
}

const NavBar = () => {
    const socials: Socials[] = [
        { name: 'GitHub', url: 'https://github.com/beki-kel', icon: FaGithub },
        { name: 'Instagram', url: 'https://www.instagram.com/beki_kel?igsh=MW5tM3JtaXk5MHF5OQ==', icon: FaInstagram },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bereket-kelay/', icon: FaLinkedin },
    ]
return (
    <nav className='w-full flex p-3'>
        <p className='text-3xl w-1/3 font-semibold'> Bereket Kelay 👨‍💻</p>
        <div className=' ml-auto flex w-1/3 justify-end items-center gap-5'>
        {
            socials.map((social,index) => 
                (<div key={index}>
                    <Link href={social.url} target='_blank'>
                    <div className=' text-4xl w-1/3'>
                        <social.icon/>
                    </div>
                    </Link>
                </div>)
            )
        }
        </div>
        <div className='pl-24'>
            <ModeToggle/>
        </div>
    </nav>
)
}

export default NavBar
