"use client";

import React from 'react';
import { DosisText } from '../../../components/DosisText';
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import { DiCss3, DiHtml5, DiJava, DiJavascript, DiJavascript1, DiReact } from 'react-icons/di';
import { SiDocker, SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';


type Skill = {
    name: string;
    src: React.ComponentType;
    className: string;
};

const Skill = () => {
    
    const skills: Skill[] = [
        {
            src: DiHtml5,
            name: "HTML",
        className:"text-red-600 "
        },
        {
            src: DiCss3,
            name: "CSS",
            className: "text-blue-500 "
        },

        {
            src:SiTailwindcss,
            name:"Tailwind.css",
            className: "text-blue-400 "
        },
        {
            src: SiJavascript,
            name: "JavaScript",
            className: "text-yellow-300 "
        },
        {
            src: SiTypescript,
            name: "TypeScript",
            className: "text-blue-600 "
        },
        {
            src: SiReact,
            name: "React",
            className: "text-blue-300"
        },
        {
            src:SiNextdotjs,
            name: "Next.js",
            className: "text-white "
        },
        {
            src: SiExpress,
            name:"Express.js",
            className: "text-white "
        },
        {
            src:SiNodedotjs,
            name: "Node.js",
            className: "text-green-600 "
        },
        {
            src:SiPython,
            name:"Python",
            className:"text-blue-800"
        },
        {
            src:DiJava,
            name:"JAVA",
            className: "text-white"
        },
        {
            src:SiMongodb,
            name:"MongoDB",
            className: "text-green-400"
        },
        {
            src:SiPostgresql,
            name:"Postgresql",
            className: "text-blue-900"
        },
        {
            src:SiPrisma,
            name:"Prisma",
            className: "text-white"
        },
        {
            src:SiFirebase,
            name:"Firebase",
            className: "text-orange-600"
        },

        {
            src:SiDocker,
            name:"Docker",
            className: "text-blue-800"
        },
        {
            src:SiFigma,
            name:"Figma",
            className: "text-white"
        }
    ];

    return (
        <div className=' pb-12 w-full bg-slate-950 text-white'>
            <h1 className='w-full text-center pt-12 text-3xl font-semibold'>
                <span className={DosisText.className}>Skills</span>
            </h1>

            <div className="py-12 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="left"
                    speed="normal"
                >
                    {skills.map((item, idx) => (
                        <div className="flex flex-col items-center" key={idx}>
                            <div className='text-9xl hover:scale-125 transition-all px-6'>
                                <span className={item.className}>
                                    <item.src/>
                                </span>
                            </div>
                            <p className='mt-5'>{item.name}</p>
                        </div>
                    ))}
                </InfiniteMovingCards>
            </div>
        </div>
    );
};

export default Skill;
