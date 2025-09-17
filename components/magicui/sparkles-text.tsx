"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CSSProperties, ReactElement, useEffect, useState } from "react";

const Sparkle = ({
  size = 20,
  top,
  left,
  delay = 0,
}: {
  size?: number;
  top: string;
  left: string;
  delay?: number;
}) => {
  return (
    <motion.svg
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
        repeatDelay: Math.random() * 2 + 1,
      }}
      width={size}
      height={size}
      style={{
        top: top,
        left: left,
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
        fill="#5C7AEA"
      />
    </motion.svg>
  );
};

export default function SparklesText({
  children,
  className,
  sparklesCount = 10,
  ...props
}: {
  children: string;
  className?: string;
  sparklesCount?: number;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const [sparkles, setSparkles] = useState<ReactElement[]>([]);

  useEffect(() => {
    const generateSparkle = () => {
      return {
        size: Math.random() * 15 + 10,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      };
    };

    const sparkleElements = Array.from({ length: sparklesCount }, (_, i) => {
      const sparkle = generateSparkle();
      return (
        <Sparkle
          key={`sparkle-${i}`}
          size={sparkle.size}
          top={sparkle.top}
          left={sparkle.left}
          delay={sparkle.delay}
        />
      );
    });

    setSparkles(sparkleElements);
  }, [sparklesCount]);

  return (
    <span
      className={cn(
        "relative inline-block",
        className
      )}
      {...props}
    >
      {sparkles}
      <span className="relative z-10">{children}</span>
    </span>
  );
}