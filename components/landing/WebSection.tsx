"use client";

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
              <div>
                <Monitor />
                <span>Sistema Web</span>
              </div>

              <h2>
                Experiência completa <br /> no <span>navegador</span>
              </h2>

              <p>
                No desktop, o faexHUB oferece uma experiência robusta com
                dashboard, gestão de turmas e relatórios para professores e
                alunos.
              </p>
            </motion.div>
            <div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
