"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref}>
      <div></div>
    </section>
  );
}
