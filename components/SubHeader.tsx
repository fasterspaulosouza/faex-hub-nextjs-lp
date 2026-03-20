"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface SubHeaderItem {
  title: string;
  title2: string;
  desc: string;
}

export default function SubHeader({ title, title2, desc }: SubHeaderItem) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="container mx-auto px-6">
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          {title} <span className="text-gradient">{title2}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}
