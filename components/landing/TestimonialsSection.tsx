"use client";

import { useRef } from "react";
import SubHeader from "../SubHeader";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="py-24 overflow-hidden"
      style={{ background: "hsl(var(--muted) / 0.3)" }}
    >
      <SubHeader
        title="Quem usa,"
        title2="recomenda"
        desc="Descubra o que alunos e professores estão dizendo sobre sua
            experiência com o FAEX HUB."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((depoimento, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring" as const,
              stiffness: 100,
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-card rounded-2xl p-6 relative hover:shadow-xl transition-shadow duration-300"
          >
            <Quote
              className="absolute top-4 right-4 w-8 h-8"
              style={{ color: "hsl(var(--primary) / 0.2)" }}
            />

            {/* estrela com animação */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: depoimento.rating }).map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.25 + j * 0.15,
                    type: "spring" as const,
                    stiffness: 300,
                  }}
                >
                  <Star className="w-4 h-4 fill-accent text-accent" />
                </motion.div>
              ))}
            </div>

            {/* infos comentarios */}
            <p className="text-foreground mb-6 leading-relaxed text-sm">
              &ldquo;{depoimento.content}&ldquo;
            </p>

            {/* info pessoa */}
            <div className="flex items-center gap-3">
              <Image
                src={`/depoimentos-0${i + 1}.png`}
                alt="Pessoa Depoimento"
                width={56}
                height={56}
              />
              <div>
                <h4 className="font-semibold text-foreground text-sm">
                  {depoimento.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {depoimento.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
