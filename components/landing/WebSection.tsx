"use client";

import { webFeatures } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor } from "lucide-react";
import Image from "next/image";
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

  return (
    <section
      ref={ref}
      id="web"
      className="py-24 overflow-hidden"
      style={{ background: "hsl(var(--secondary) / 0.3)" }}
    >
      <div className="container mx-auto px-6">
        {/* criamos uma div com 2 colunas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Grid da imagem */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
              className="relative w-full max-w-2xl"
            >
              <div className="absolute -inset-8 hero-gradient rounded-3xl blur-3xl opacity-15 pointer-events-none" />
              <Image
                src="/app-desktop.png"
                alt="Faex Hub Web"
                width={1200}
                height={750}
                className="relative z-10 w-full rounded-xlr"
                priority={false}
              />
            </motion.div>
          </motion.div>

          {/* Grid do texto */}
          <motion.div style={{ y: textY }} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "0px" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  border: "1px solid hsl(var(--primary) / 0.2)",
                }}
              >
                <Monitor className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Sistema Web
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Experiência completa <br /> no{" "}
                <span className="text-gradient">navegador</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                No desktop, o faexHUB oferece uma experiência robusta com
                dashboard, gestão de turmas e relatórios para professores e
                alunos.
              </p>
            </motion.div>

            <div className="space-y-6">
              {webFeatures.map((wfeature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--accent) /0.1" }}
                  >
                    <wfeature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {wfeature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {wfeature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
