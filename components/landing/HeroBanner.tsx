"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";

export default function HeroBanner() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  //   Fica para atrás (profundidade)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  //   O conteúdo some e encolhe levemente conforme o usuário rola para baixo
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  //   Os orbs decorativos se movem em direções opostas
  const orbX1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const orbX2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 hero-gradient opacity-95"
      />

      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <motion.div
        style={{
          x: orbX1,
          background: "hsl(15 90% 58% / 0.2)",
          filter: "blur(60px)",
        }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full floating pointer-events-none"
      />
      <motion.div
        style={{
          x: orbX2,
          background: "rgb(255 255 255 / 0.08)",
          filter: "blur(80px)",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full floating-delay pointer-events-none"
      />

      <motion.div
        style={{ y: textY, opacity, scale }}
        className="container mx-auto px-6 relative z-10 pt-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{
              borderColor: "hsl(var(--primary-foreground) / 0.2)",
              background: "hsl(var(--primary-foreground) / 0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-sm font-medium text-primary-foreground/90">
              A rede social acadêmica que faltava
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Conecte-se. <br />
            <span className="text-accent">Compartilhe.</span> Aprenda.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            FAEX HUB é a rede social que conecta alunos e professores para
            compartilhar experiências, conteúdos e momentos que transformam a
            sala de aula.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="accent" size="lg" className="text-base px-8 py-6">
              Acessar Agora
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-base px-8 py-6"
            >
              Saiba Mais
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
