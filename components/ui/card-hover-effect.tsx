'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({items,className,}: {items: {title: string;description: string;link: string; icon?: string;}[];
    className?: string;}) => {let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div
        className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-6",className)}>
        {items.map((item, idx) => (
            <Link href={item?.link} key={item?.link} className="relative group block p-2 h-full w-full" 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
                {hoveredIndex === idx && (
                <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-800/50 via-slate-700/50 to-slate-800/50 block rounded-3xl shadow-xl border border-slate-600/30"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.15, delay: 0.1 },
                    }}
                />
                )}
            </AnimatePresence>
            <Card>
                {item.icon && (
                    <div className="text-4xl mb-4 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                    </div>
                )}
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
            </Card>
            </Link>
        ))}
        </div>
    );
};

export const Card = ({className,children,}: {className?: string; children: React.ReactNode;}) => {
    return (
        <div className={cn("rounded-3xl h-full w-full p-8 overflow-hidden bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/10 relative z-20 transition-all duration-300 group-hover:border-blue-500/30",
            className)}>
        <div className="relative z-50">
            <div className="">{children}</div>
        </div>
        </div>
    );
};
export const CardTitle = ({className,children,}: {className?: string;children: React.ReactNode;}) => {
    return (
        <h4 className={cn("text-white font-bold tracking-tight text-xl text-center mb-4 group-hover:text-blue-200 transition-colors duration-300", className)}>
        {children}
        </h4>
    );
};
export const CardDescription = ({className,children,}: {className?: string;children: React.ReactNode;}) => {
    return (
        <p className={cn("text-gray-300 tracking-wide text-center leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300",className)}>
            {children}
        </p>
    );
};
