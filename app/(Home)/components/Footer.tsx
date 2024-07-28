import React from 'react';
import { DosisText } from '../../../components/DosisText';
import {FaLinkedin,FaGithub,FaInstagram, FaTelegram}  from 'react-icons/fa';
import Link from 'next/link';

type Socials ={
    name: string,
    url: string,
    icon:React.ComponentType,
}

const socials: Socials[] = [
    { name: 'GitHub', url: 'https://github.com/beki-kel', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bereket-kelay/', icon: FaLinkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/beki_kel?igsh=MW5tM3JtaXk5MHF5OQ==', icon: FaInstagram },
    { name: 'Telegram', url: 'https://t.me/Bk_kel' , icon: FaTelegram}
]

const Footer = () => {
    return (
        <div className='w-full p-6 bg-slate-950 flex flex-col justify-center items-center'>
            <p className='text-4xl text-white font-bold py-3'><span className={DosisText.className}>Bereket Kelay</span></p>
            <div className='flex gap-8 pt-4'>
                {
                socials.map((social,index) => 
                    (<div key={index}>
                        <Link href={social.url} target='_blank'>
                        <div className=' text-4xl w-1/3 hover:scale-125 transition-all text-white'>
                            <social.icon/>
                        </div>
                        </Link>
                    </div>)
                )
            }
            </div>
            
        </div>
    )
}

export default Footer
