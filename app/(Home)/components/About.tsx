"use client"
import React from 'react'
import { GlareCard } from "../../../components/ui/glare-card";
import { SiDocker, SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiCss3, DiHtml5, DiJava } from 'react-icons/di';
import { DosisText } from '../../../components/DosisText';
import { LampContainer } from "../../../components/ui/lamp";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import { courses } from "../../../data/courses";

type Skill = {
    name: string;
    src: React.ComponentType;
    className: string;
};

const About = () => {
    
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
    <div className='min-h-screen pb-24 w-full bg-slate-950 text-white -mt-40'>
        {/* About/Education Section */}
        <LampContainer >
            <h1 className='w-full text-center text-3xl  font-semibold -mt-40'> <span className={DosisText.className}>Education And Certificate</span> </h1>
            <h3 className='w-full text-center text-xl px-32 pt-4'>Currently I am 4th year Bsc. student in Software Engineering  at Addis Ababa University, Ethiopia. <br/> Here are major certifications I have Accomplished</h3>
        </LampContainer>
        <div className='w-full flex flex-wrap justify-center gap-12 -mt-80'>
            {courses.map((course) => {
                const IconComponent = course.icon;
                return (
                    <GlareCard key={course.id} value={course.certificateUrl} className="flex flex-col px-4 items-center justify-center">
                        <IconComponent 
                            size= {96}
                            className={course.iconClassName || "text-white"}
                        />
                        <p className="text-white font-semibold text-xl text-center mt-4 px-2">
                            {course.title}
                        </p>
                        <p className='text-center text-gray-500'>{course.provider}</p>
                        <p className='cursor-pointer text-xl underline decoration-white underline-offset-4 focus:text-blue-700 mt-20'>
                            Certificate
                        </p>
                    </GlareCard>
                );
            })}
        </div>

        {/* Skills Section */}
        <div className="mt-24">
            <h1 className='w-full text-center pt-12 text-3xl font-semibold'>
                <span className={DosisText.className}>Skills</span>
            </h1>

            <div className="py-12 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="left"
                    speed="slow"
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
        
    </div>
)
}

export default About
