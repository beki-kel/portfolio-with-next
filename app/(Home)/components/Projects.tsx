// pages/projects.tsx
"use client";

import React, { useState } from 'react';
import { PinContainer } from "../../../components/ui/3d-pin";
import { DosisText } from '../../../components/DosisText';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiVercel } from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectCategories = {
    Web: [
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
    ],
    App: [
        {
            title: "Exopia Mobile",
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
        }
    ],
    "UI / UX": [ ]


};

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Web');

    return (
        <div className="mb-8 pb-24 flex flex-col items-center justify-center px-3">
            <h1 className='w-full text-center p-12 text-3xl font-semibold'>
                <span className={DosisText.className}>Projects</span>
            </h1>
            <Tabs defaultValue="Web" onValueChange={(value) => setSelectedCategory(value)} >
                <TabsList className="flex gap-4 justify-center mb-36 bg-slate-950" >
                    {Object.keys(projectCategories).map((category) => (
                        <TabsTrigger key={category} value={category} className="text-white">
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {Object.keys(projectCategories).map((category) => (
                    <TabsContent key={category} value={category}>
                        <div className="w-full pb-24 flex flex-col flex-wrap gap-60 items-center justify-center px-3">
                            {projectCategories[category as keyof typeof projectCategories].map((project:any, index:any) => (
                                <>
                                    <PinContainer  title={`/${project.title}.com`} href={project.url}>
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
                                                    {project.tags.map((tag:any, idx:any) => (
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
                                </>
                                    
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

export default Projects;
