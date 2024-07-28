import React from 'react'
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { DosisText } from '@/components/DosisText';

export const projects = [
    {
        title: "Web-Development",
        description: "Developing custom websites with responsive design and dynamic functionality to enhance user experience and meet business needs.",
        link: "mailto:breketkelay@gmail.com",
    },
    {
        title: "Mobile-App Development",
        description: "Creating innovative and user-friendly mobile applications for iOS and Android platforms, tailored to provide seamless experiences on the go.",
        link: "mailto:breketkelay@gmail.com",
    },
    {
        title: "UI/UX Design",
        description: "Designing engaging and intuitive user interfaces and experiences, ensuring your digital products are visually appealing and easy to navigate.",
        link: "mailto:breketkelay@gmail.com",
    },
    {
        title: "Maintenance",
        description: "Offering ongoing maintenance and updates for digital products to ensure they remain functional, secure, and up-to-date with the latest technologies.",
        link: "mailto:breketkelay@gmail.com",
    },
    {
        title: "Testing",
        description: "Conducting comprehensive testing to identify and resolve issues, ensuring that your applications and websites perform reliably and meet quality standards.",
        link: "mailto:breketkelay@gmail.com",
    },
    {
        title: "Documentation",
        description: "Creating detailed and clear documentation for your projects, including user guides, technical manuals, and API documentation to support effective use and maintenance.",
        link: "mailto:breketkelay@gmail.com",
    },
];


const Services = () => {
return (
    <div className='flex flex-col '>
        <h1 className='w-full text-center text-3xl font-semibold text-black'> <span className={DosisText.className}>Services</span> </h1>
        
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
    </div>
)
}
export default Services
