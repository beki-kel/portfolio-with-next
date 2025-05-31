// pages/projects.tsx
"use client";

import React from 'react';
import { DosisText } from '../../../components/DosisText';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiExpress, SiGithub, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Smartphone, Palette } from 'lucide-react';

// Define project interface
interface ProjectTag {
    name: string;
    className: string;
    component: React.ComponentType;
}

interface Project {
    title: string;
    description: string;
    url: string;
    img: string;
    tags: ProjectTag[];
}

interface ProjectWithCategory extends Project {
    category: string;
    categoryColor: string;
}

const projectCategories = {
    Web: {
        icon: Code2,
        projects: [
            {
                title: "Fly Zagol",
                description: "Modern travel booking platform with seamless user experience",
                url: "https://flyzagol.com/en",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748596662/zagol.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Next.js', className: 'text-white', component: SiNextdotjs },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub },
                ]
            },
            {
                title: "Muscle Fitness",
                description: "Comprehensive fitness cusotmer tracking and workout planning application",
                url: "https://musclefitness.shalops.com/en",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748595645/muscle%20fitness.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Next.js', className: 'text-white', component: SiNextdotjs },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub },
                    { name: 'Postgres', className: 'text-blue-500', component: SiPostgresql },
                    { name: 'Nest.js', className: 'text-pink-800', component: SiNestjs }
                ]
            },
            {
                title: "Ethio college prep",
                description: "Official website of Ethiopian College Prep with educational resources and information",
                url: "https://www.ethiocollegeprep.com/",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748603023/ecp.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Next.js', className: 'text-white', component: SiNextdotjs },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub }
                ]
            },
            {
                title: "Magna PLC",
                description: "Corporate website with elegant design and professional presentation",
                url: "https://www.magnaplc.com/",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748595465/magna.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Next.js', className: 'text-white', component: SiNextdotjs },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub }
                ]
            },
            {
                title: "Brukti Shopping",
                description: "E-commerce platform for buying and selling used items with user-friendly interface",
                url: "https://www.bruktishopping.com/",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748600697/brukti.png",
                tags: [
                    { name: 'MongoDB', className: 'text-green-600', component: SiMongodb },
                    { name: 'Express', className: 'text-white', component: SiExpress },
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'NODE.js', className: 'text-green-800', component: SiNodedotjs },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub }
                ]
            },
            {
                title: "Hotel Managment website ui template",
                description: "A modern hotel management website template with responsive design and user-friendly interface",
                url: "https://hotelmangementwebsite.vercel.app",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748601057/hotel%20dashboard.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Vite', className: 'text-purple-500', component: SiVite },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'Vercel', className: 'text-white', component: SiVercel },
                    { name: 'GitHub', className: 'text-white', component: SiGithub }
                ]
            },
            {
                title: "Study World",
                description: "An educational platform for students to access resources and study materials which is still under development",
                url: "https://studyworld-exam-power.vercel.app/",
                img: "https://res.cloudinary.com/dr2h8zmll/image/upload/v1748603414/study%20world.png",
                tags: [
                    { name: 'React', className: 'text-blue-400', component: SiReact },
                    { name: 'Tailwind.css', className: 'text-blue-300', component: SiTailwindcss },
                    { name: 'GitHub', className: 'text-white', component: SiGithub },
                    { name: 'Vercel', className: 'text-white', component: SiVercel },
                    { name: 'Vite', className: 'text-purple-500', component: SiVite }
                ]
            }
        ]
    },
    App: {
        icon: Smartphone,
        projects: [ ]
    },
    "UI/UX": {
        icon: Palette,
        projects: []
    }
};

const Projects = () => {
    // Combine all projects into one array with category labels
    const allProjects: ProjectWithCategory[] = [
        ...projectCategories.Web.projects.map((project: Project) => ({ 
            ...project, 
            category: 'Web Development', 
            categoryColor: 'from-blue-500 to-cyan-400' 
        })),
        ...projectCategories.App.projects.map((project: Project) => ({ 
            ...project, 
            category: 'Mobile App', 
            categoryColor: 'from-green-500 to-emerald-400' 
        })),
        ...projectCategories["UI/UX"].projects.map((project: Project) => ({ 
            ...project, 
            category: 'UI/UX Design', 
            categoryColor: 'from-purple-500 to-pink-400' 
        }))
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 relative overflow-hidden px-20">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950/40 to-black/80"></div>
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-bounce animation-delay-2000"></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
            
            <div className="relative z-10">
                {/* Enhanced Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className='text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-gray-300 bg-clip-text text-transparent'
                        >
                            <span className={DosisText.className}>Featured Projects</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
                        >
                            Explore my portfolio of innovative solutions spanning web development, mobile applications, and user experience design
                        </motion.p>
                        
                        {/* Stats Bar */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12"
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{allProjects.length}+</div>
                                <div className="text-gray-400 text-sm md:text-base">Projects Completed</div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">10+</div>
                                <div className="text-gray-400 text-sm md:text-base">Technologies</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-12"
                    >
                        {allProjects.map((project: ProjectWithCategory, index: number) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <Link 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block relative h-full"
                                >
                                    {/* Project Card */}
                                    <div className="
                                        relative bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-900/50 
                                        backdrop-blur-xl rounded-3xl border border-gray-700/50 
                                        overflow-hidden transition-all duration-700
                                        hover:border-gray-500/60 hover:shadow-2xl 
                                        hover:shadow-blue-500/20 hover:-translate-y-3
                                        group-hover:scale-[1.02] cursor-pointer
                                        active:scale-[0.98] h-full flex flex-col
                                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                                    ">
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <motion.span 
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className={`
                                                    px-4 py-2 rounded-full text-xs font-semibold
                                                    bg-gradient-to-r ${project.categoryColor} text-white
                                                    shadow-lg backdrop-blur-sm border border-white/20
                                                    hover:scale-105 transition-transform duration-300
                                                `}
                                            >
                                                {project.category}
                                            </motion.span>
                                        </div>

                                        {/* Image Container */}
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900">
                                                <Avatar className="w-full h-full rounded-none">
                                                    <AvatarImage 
                                                        src={project.img} 
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white text-2xl">
                                                        {project.title.slice(0, 2).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            {/* Visit Button */}
                                            <div className="absolute top-4 right-4">
                                                <motion.div 
                                                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="
                                                        bg-white/10 backdrop-blur-lg rounded-full p-3
                                                        border border-white/30 hover:bg-white/20
                                                        transition-all duration-300 shadow-xl
                                                        opacity-0 group-hover:opacity-100
                                                        transform translate-y-2 group-hover:translate-y-0
                                                        hover:shadow-white/20
                                                    "
                                                >
                                                    <ExternalLink className="w-5 h-5 text-white" />
                                                </motion.div>
                                            </div>
                                            
                                            {/* Hover Text */}
                                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                                                {project.title}
                                            </h3>

                                            {/* Tech Stack */}
                                            <div className="mt-auto">
                                                <div className="flex flex-wrap gap-3 mb-6">
                                                    {project.tags.slice(0, 4).map((tag: ProjectTag, idx: number) => (
                                                        <TooltipProvider key={idx}>
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <div className="
                                                                        bg-gray-800/60 hover:bg-gray-700/60
                                                                        rounded-lg p-3 border border-gray-600/40
                                                                        hover:border-gray-500/60 transition-all duration-300
                                                                        hover:shadow-lg hover:shadow-blue-500/20
                                                                        transform hover:scale-110 hover:-translate-y-1
                                                                    ">
                                                                        <span className={`${tag.className} text-xl block`}>
                                                                            <tag.component />
                                                                        </span>
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent className="bg-gray-900 border-gray-700 text-white shadow-xl">
                                                                    <p className="font-medium">{tag.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    ))}
                                                    {project.tags.length > 4 && (
                                                        <div className="bg-gray-800/60 rounded-lg p-3 border border-gray-600/40">
                                                            <span className="text-gray-400 text-base">
                                                                +{project.tags.length - 4}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Action Indicator */}
                                                <div className="flex items-center justify-between text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                    <span>Click to explore</span>
                                                    <div className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                {/* Enhanced Call to Action */}
               
            </div>
        </div>
    );
}

export default Projects;
