"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WebSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.9, 1, 1.02]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return <section ref={ref} id="web"></section>;
}
