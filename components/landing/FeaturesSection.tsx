"use client";

import { platformFeatures } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  }),
};

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Recursos que <span className="text-gradient">transformam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que alunos e professores precisam para uma experiência
            acadêmica conectada e colaborativa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((plataform, i) => (
            <motion.div
              key={plataform.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <motion.div>
                <plataform.icon />
              </motion.div>
              <h3>{plataform.title}</h3>
              <p>{plataform.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
