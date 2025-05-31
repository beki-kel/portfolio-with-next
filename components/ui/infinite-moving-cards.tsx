"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
    children,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}: {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}): JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "30s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "50s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Duplicate items multiple times for seamless infinite scroll
            for (let i = 0; i < 2; i++) {
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });
            }

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-8xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul 
                ref={scrollerRef} 
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {children}
            </ul>
        </div>
    );
};
