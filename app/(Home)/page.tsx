'use client';

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import Skill from './components/Skill';
import Projects from './components/Projects';
import Services from './components/Services';
import Loading from '@/components/Loading';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import { FloatingDock } from '@/components/ui/floating-dock';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  Briefcase, 
  Mail 
} from 'lucide-react';

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'services';

const Page  = () => {

  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState<Section>('hero');



  const dockItems = [
    {
      title: "Home",
      icon: <Home className={cn("h-full w-full", currentSection === 'hero' ? "text-white" : "text-neutral-300")} />,
      href: "#home",
      active: currentSection === 'hero',
    },
    {
      title: "About & Skills",
      icon: <User className={cn("h-full w-full", currentSection === 'about' ? "text-white" : "text-neutral-300")} />,
      href: "#about",
      active: currentSection === 'about',
    },
    {
      title: "Projects",
      icon: <FolderOpen className={cn("h-full w-full", currentSection === 'projects' ? "text-white" : "text-neutral-300")} />,
      href: "#projects",
      active: currentSection === 'projects',
    },
    {
      title: "Services",
      icon: <Briefcase className={cn("h-full w-full", currentSection === 'services' ? "text-white" : "text-neutral-300")} />,
      href: "#services",
      active: currentSection === 'services',
    },
  ];

  const handleSectionChange = (href: string) => {
    const sectionMap: Record<string, Section> = {
      '#home': 'hero',
      '#about': 'about',
      '#skills': 'skills',
      '#projects': 'projects',
      '#services': 'services',
    };
    
    const section = sectionMap[href];
    if (section) {
      setCurrentSection(section);
      // Scroll to top when changing sections
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skill />;
      case 'projects':
        return <Projects />;
      case 'services':
        return <Services />;
      default:
        return <Hero />;
    }
  };

  return (
        <div className='min-h-screen flex flex-col relative bg-black px-4'>
          {currentSection === 'hero' && <NavBar/>}
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              {renderCurrentSection()}
            </motion.div>
          </AnimatePresence>

          {/* Floating Dock - positioned at bottom */}
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <FloatingDock
              items={dockItems}
              desktopClassName=""
              mobileClassName=""
              onItemClick={handleSectionChange}
            />
          </div>
        </div> 
  )
}

export default Page
