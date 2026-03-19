"use client";

import { appFeatures } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AppSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="app" className="py-26 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* temos que usar gird para difinir nossa coluna apenas no desktop */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna de texto com parallax */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "0px" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 rounded-full mb-6"
                style={{
                  background: "hsl(var(--accent) / 0.1)",
                  border: "1px solid hsl(var(--accent) / 0.2)",
                }}
              >
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Aplicativo Mobile
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground-mb-6 leading-tight">
                Tudo na palma <br /> da sua{" "}
                <span className="text-gradient">mão</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Com o faexHUB, você acompanha novidades da turma, interage com
                conteúdos e se conecta com colegas e professores de qualquer
                lugar.
              </p>
            </motion.div>

            <div className="space-y-6">
              {appFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
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
                    style={{
                      background: "hsl(var(--primary) / 0.1)",
                    }}
                  >
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna com a imagem */}
          <motion.div
            style={{ y: imgY, rotateZ: imgRotate }}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20ox)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
              className="relative"
            >
              <div className="absolute -inset-8 hero-gradient rounded-3xl blur-3xl opacity-20 pointer-events-none" />
              <Image
                src="/app-mockup.png"
                alt="Faex Hub App Mobile"
                width={400}
                height={800}
                className="relative z-10 w-80 md: w-96 h-auto dropg-shadow-2xl"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
