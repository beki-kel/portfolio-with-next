import React from 'react'
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { DosisText } from '@/components/DosisText';

export const projects = [
    {
        title: "Web Development",
        description: "Crafting bespoke websites with cutting-edge responsive design and dynamic functionality to elevate user experience and drive business success.",
        link: "mailto:breketkelay@gmail.com",
        icon: "🌐"
    },
    {
        title: "Mobile App Development", 
        description: "Building innovative and intuitive mobile applications for iOS and Android platforms, delivering seamless experiences that users love.",
        link: "mailto:breketkelay@gmail.com",
        icon: "📱"
    },
    {
        title: "UI/UX Design",
        description: "Creating captivating and user-centric interfaces that blend aesthetic beauty with functional excellence, ensuring effortless navigation.",
        link: "mailto:breketkelay@gmail.com",
        icon: "🎨"
    },
    {
        title: "System Maintenance",
        description: "Providing comprehensive maintenance and strategic updates to keep your digital products secure, optimized, and future-ready.",
        link: "mailto:breketkelay@gmail.com",
        icon: "⚙️"
    },
    {
        title: "Quality Assurance",
        description: "Delivering meticulous testing and quality assurance to ensure your applications perform flawlessly and exceed industry standards.",
        link: "mailto:breketkelay@gmail.com",
        icon: "🔍"
    },
    {
        title: "Technical Documentation",
        description: "Producing comprehensive and accessible documentation including user guides, technical specifications, and API references for seamless project continuity.",
        link: "mailto:breketkelay@gmail.com",
        icon: "📚"
    },
];


const Services = () => {
    return (
        <section className='relative min-h-screen py-20 bg-gradient-to-br from-black via-slate-900 to-black'>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className='relative flex flex-col items-center'>
                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto px-6">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">
                            What I Offer
                        </span>
                    </div>
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 ${DosisText.className}`}>
                        Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Transforming ideas into exceptional digital experiences through innovative technology solutions and meticulous craftsmanship.
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
                    <HoverEffect items={projects} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
                </div>
                
                {/* Call to Action */}
                <div className="my-20 text-center">
                    <a href="mailto:breketkelay@gmail.com" className="inline-flex items-center gap-2 px-6 py-5  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer group">
                        <span>Ready to start your project?</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="text-gray-400 mt-3 text-sm">
                        Let&apos;s collaborate to bring your vision to life
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Services
