import React from 'react'
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
    <nav className='w-full flex p-5 bg-black text-white fixed z-30'>
        <h1 className='text-3xl w-1/3 font-semibold underline underline-offset-8 decoration-blue-600 -rotate-2'> Bereket Kelay 👨‍💻</h1>
        <div className=' ml-auto flex w-1/3 justify-end items-center gap-5 pr-10'>
        {
            socials.map((social,index) => 
                (<div key={index}>
                    <Link href={social.url} target='_blank'>
                    <div className=' text-4xl w-1/3 hover:scale-125 transition-all'>
                        <social.icon/>
                    </div>
                    </Link>
                </div>)
            )
        }
        </div>
    </nav>
)
}

export default NavBar
