import React from 'react'
import {Boxes} from '../../../components/ui/background-boxes'
import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";
import { DosisText } from '../../../components/DosisText';
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";
import Image from 'next/image'
import Link from 'next/link'
import { 
    Github, 
    Linkedin, 
    Twitter, 
    Download, 
    Code, 
    Rocket, 
    Star, 
    MapPin, 
    Calendar, 
    Award, 
    Briefcase, 
    GraduationCap,
    Coffee,
    Heart,
    Zap,
    Globe,
    Mail,
    Phone,
    ExternalLink
} from 'lucide-react'
const Hero = () => {
    const words = 'I am a Fullstack developer passionate about modern web applications and machine learning';
    const stats = [
        { number: '2+ Years', label: 'Experience', icon: Calendar, color: 'blue' },
        { number: '7+ ', label: ' Completed projects', icon: Briefcase, color: 'green' },
        { number: '100%', label: 'Client Satisfaction', icon: Heart, color: 'red' },
    ];
    
    const socialLinks = [
        { icon: Github, href: 'https://github.com/bereketkelay', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: Linkedin, href: 'https://linkedin.com/in/bereket-kelay', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: 'https://twitter.com/bereketkelay', label: 'Twitter', color: 'hover:text-blue-300' }
    ];

    const skills = [
        { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
        { name: 'Node.js', level: 90, color: 'bg-green-500' },
        { name: 'Python/ML', level: 85, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 88, color: 'bg-blue-400' },
    ];

    const achievements = [
        { icon: Award, text: 'Top 10% on GitHub', color: 'text-yellow-400' },
        { icon: Star, text: 'Open Source Contributor', color: 'text-green-400' },
        { icon: Zap, text: 'Fast Delivery Expert', color: 'text-blue-400' },
        { icon: Globe, text: 'Remote Work Specialist', color: 'text-purple-400' },
    ];

return (
    <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Desktop Layout */}
        <div className='w-full flex flex-col lg:flex-row min-h-screen relative z-10'>
            {/* Left Content Section */}
            <div className='w-full lg:w-5/12 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center px-8 sm:px-12 lg:px-24 py-16 lg:py-0'>
                {/* Status Badge */}
                <div className=" w-full flex justify-center lg:justify-start mt-24 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2  bg-green-500/20 text-green-400 rounded-full border border-green-500/30 text-sm font-medium animate-pulse">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Available for work
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center lg:text-left w-full">
                    <div className="mb-2">
                        <span className="text-blue-400 text-xl font-medium">Hello, I&apos;m</span>
                    </div>
                    <h1 className='text-white text-center lg:text-left text-5xl sm:text-6xl lg:text-5xl font-bold mb-2 leading-tight'>
                        <span className={`bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent ${DosisText.className}`}>
                            Bereket Kelay
                        </span>
                    </h1>
                    
                    {/* Role with highlight */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-center lg:text-left">
                            <span className="text-gray-300">Full Stack </span>
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developer</span>
                        </h2>
                    </div>
                    
                    {/* Animated Description */}
                    <div className="mb-16">
                        <TextGenerateEffect words={words} />
                    </div>
                    
                    {/* Simplified Info */}
                    <div className="flex flex-col gap-6 justify-center lg:justify-start mb-8">
                        <div className="flex items-center gap-3 text-gray-300 text-lg justify-center ">
                            <MapPin className="w-5 h-5 text-blue-400" />
                            <span>Based in Ethiopia, working globally</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 text-lg justify-center ">
                            <Code className="w-5 h-5 text-green-400" />
                            <span>Specializing in Typescript & Python</span>
                        </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-start  mb-16">
                        <HoverBorderGradient containerClassName="rounded-full" as="button">
                            <Link href="mailto:breketkelay@gmail.com" className="flex items-center gap-2 text-lg px-2 py-2 whitespace-nowrap">
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </Link>
                        </HoverBorderGradient>
                        
                        <HoverBorderGradient containerClassName="rounded-full bg-transparent" as="button" className="border-gray-600">
                            <Link href="#" className="flex items-center gap-2 text-white text-lg px-2 py-2 whitespace-nowrap" onClick={() => alert('Resume download will be available soon!')}><Download className="w-5 h-5" />Download CV</Link>
                        </HoverBorderGradient>
                    </div>
                                        
                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-2 justify-center items-center w-full max-w-lg mx-auto lg:mx-0 mb-2">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 text-center hover:border-blue-500/30 transition-all duration-300 group">
                                    <Icon className="w-5 h-5 text-blue-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                                    <div className="text-xl font-bold text-white mb-0.5">
                                        {stat.number}
                                    </div>
                                    <div className="text-[0.6rem] text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis px-1">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                </div>
            </div>
            
            {/* Right Image Section */}
            <div className="h-64 sm:h-96 lg:h-screen relative w-full lg:w-7/12 pt-10 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black flex flex-col items-center justify-center order-first lg:order-last">
                {/* Simplified Background Effects */}
                <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
                
                <Boxes />

                {/* Single Orbital Ring */}
                <div className="absolute inset-0 flex items-center justify-center z-15">
                    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] border border-blue-500/20 rounded-full animate-spin-slow" />
                </div>

                {/* Central Avatar with Simple Styling */}
                <div className="relative z-30 group">
                    <div className="absolute -inset-4 bg-gradient-to-r rounded-full from-blue-600 via-purple-600 to-green-600 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className='relative h-40 w-40 sm:h-64 sm:w-64 lg:h-80 lg:w-80 border-4 border-gradient-to-r from-blue-500 via-purple-500 to-green-500 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden' >
                        <Image 
                            src="https://res.cloudinary.com/dr2h8zmll/image/upload/c_fill,ar_1:1,g_auto/v1722025229/MY_Image_dha270.jpg"
                            alt="Bereket Kelay - Full Stack Developer"
                            fill
                            className="object-cover group-hover:brightness-110 transition-all duration-300"
                            priority
                            sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 320px"
                        />
                    </div>
                </div>

                {/* Simplified Floating Elements */}
                <div className="absolute top-[25%] left-[15%] animate-float">
                    <div className="bg-gradient-to-r from-blue-500/30 to-blue-600/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/50">
                        <Code className="w-8 h-8 text-blue-400" />
                    </div>
                </div>
                
                <div className="absolute bottom-[25%] right-[15%] animate-float-delayed">
                    <div className="bg-gradient-to-r from-green-500/30 to-green-600/40 backdrop-blur-sm rounded-2xl p-4 border border-green-500/50">
                        <Rocket className="w-8 h-8 text-green-400" />
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Available</span>
                </div>
            </div>
        </div>
        
        {/* Mobile-specific content */}
        <div className="lg:hidden px-8 pb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-white text-2xl font-semibold mb-8 text-center">Quick Facts</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span>Available for freelance projects</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Specializing in Typescript & Python</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span>Based in Ethiopia, working globally</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero
