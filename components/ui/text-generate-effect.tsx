"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
words,
className,
filter = true,
duration = 0.2,
}: {
words: string;
className?: string;
filter?: boolean;
duration?: number;
}) => {
const [scope, animate] = useAnimate();
let wordsArray = words.split(" ");
useEffect(() => {
    animate(
    "span",
    {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
    },
    {
        duration: duration ? duration : 0,
        delay: stagger(0.2),
    }
    );
}, [scope.current]);

const renderWords = () => {
    return (
    <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
        return (
            <motion.span
            key={word + idx}
            className="text-white font-sans text-lg  opacity-0 font-thin"
            style={{
                filter: filter ? "blur(10px)" : "none",
            }}
            >
            {word}{" "}
            </motion.span>
        );
        })}
    </motion.div>
    );
};

return (
    <div className={cn("font-bold", className)}>
    <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide text-center">
        {renderWords()}
        </div>
    </div>
    </div>
);
};
