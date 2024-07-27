"use client";

import React from 'react'
import { PinContainer } from "../../../components/ui/3d-pin";
import { DosisText } from '../../../components/DosisText';
import  Link  from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Projects = () => {
    return (
        <div className=' pb-24 w-full bg-slate-950 text-white'>
            <h1 className='w-full text-center pb-12 text-3xl font-semibold mb-24'>
                <span className={DosisText.className}>Projects</span>
            </h1>

            <div className=" w-full pb-24 flex flex-col flex-wrap gap-72 items-center justify-center px-3">
                <PinContainer title="/Exopia.com" href="https://exopia.vercel.app/" >
                    <div className="flex basis-full flex-col px-4 py-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[60rem] h-[33.75rem] ">
                        <h3 className="w-full text-center !pb-2 !m-0 font-bold  text-xl text-slate-100">
                            Exopia
                        </h3>
                        <Avatar className="flex flex-1 w-full rounded-lg mt-4 bg-gray-100 ">
                            <AvatarImage src="https://res.cloudinary.com/dr2h8zmll/image/upload/c_fill,ar_16:9/v1722107699/Exopia2_ovmbgr.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </PinContainer>
            </div>
        </div>
    )
}

export default Projects
