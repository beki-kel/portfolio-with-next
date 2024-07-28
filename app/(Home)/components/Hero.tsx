import React from 'react'
import {Boxes} from '../../../components/ui/background-boxes'
import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";
import { DosisText } from '../../../components/DosisText';
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar";
import Link from 'next/link'
const Hero = () => {
    const words = 'I am a Fullstack developer passionate about modern web applications and machine learning';
return (
    <div>
        <div className='w-full flex'>
        <div className='w-5/12 bg-black flex flex-col justify-center items-center px-20'>
        <h1 className='text-white text-center text-4xl font-sans font-bold'><span className={DosisText.className}>Hey I &apos;m Bereket 👋 </span></h1>
        <TextGenerateEffect words={words} />
        <div className="m-6 flex justify-center text-center">
            <HoverBorderGradient containerClassName="rounded-full" as="button">
            <Link href = {"mailto:breketkelay@gmail.com"}>Contact Me</Link>
            </HoverBorderGradient>
        </div>
        </div>
        <div className="h-screen relative w-7/12 overflow-hidden bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <Avatar className='h-96 w-96 border-4 border-blue-700' >
            <AvatarImage src="https://res.cloudinary.com/dr2h8zmll/image/upload/c_fill,ar_1:1,g_auto/v1722025229/MY_Image_dha270.jpg"/>
            <AvatarFallback className='bg-transparent text-white'>BK</AvatarFallback>
        </Avatar>

        </div>
    </div>
    </div>
)
}

export default Hero
