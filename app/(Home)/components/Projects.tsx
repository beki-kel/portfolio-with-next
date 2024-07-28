"use client";

import React from 'react';
import { PinContainer } from "../../../components/ui/3d-pin";
import { DosisText } from '../../../components/DosisText';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiVercel } from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Tag {
    name: string;
    className: string;
    component: React.ComponentType;
}

interface Project {
    title: string;
    url: string;
    img: string;
    tags: Tag[];
}

const projects: Project[] = [
    {
        title: "Exopia",
        url: "https://exopia.vercel.app/",
        img: "https://res.cloudinary.com/dr2h8zmll/image/upload/c_fill,ar_16:9/v1722107699/Exopia2_ovmbgr.png",
        tags: [
            { name: 'MongoDB', className: 'text-green-600', component: SiMongodb },
            { name: 'Express', className: 'text-white', component: SiExpress },
            { name: 'React', className: 'text-blue-400', component: SiReact },
            { name: 'NODE.js', className: 'text-green-800', component: SiNodedotjs },
            { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
            { name: 'Vercel', className: 'text-white', component: SiVercel },
            { name: 'GitHub', className: 'text-white', component: SiGithub }
        ]
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <div className='pb-24 pt-16 w-full bg-white'>
            <h1 className='w-full text-center pb-12 text-3xl font-semibold mb-24'>
                <span className={DosisText.className}>Projects</span>
            </h1>

            <div className="w-full pb-24 flex flex-col flex-wrap gap-72 items-center justify-center px-3">
                {projects.map((project, index) => (
                    <PinContainer key={index} title={`/${project.title}.com`} href={project.url}>
                        <div className="flex basis-full flex-col px-4 py-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[60rem] h-[33.75rem]">
                            <h3 className="w-full text-center !pb-2 !m-0 font-bold text-xl text-slate-100">
                                {project.title}
                            </h3>
                            <Avatar className="flex flex-1 w-full rounded-lg mt-4 bg-gray-100">
                                <AvatarImage src={project.img} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="w-full p-4 flex items-center justify-center">
                                <p className='text-white text-xl mr-5'>Tech Stack: </p>
                                <div className='flex gap-4 items-center text-4xl'>
                                    {project.tags.map((tag, idx) => (
                                        <TooltipProvider key={idx}>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <span className={tag.className}><tag.component /></span>
                                                </TooltipTrigger>
                                                <TooltipContent className='bg-slate-900 text-white'>
                                                    <p>{tag.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </PinContainer>
                ))}
            </div>
        </div>
    );
}

export default Projects;
