"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import type { FaqItem as FaqItemType } from "@/lib/data";

// Componente interno — cada item do accordion com estado próprio
function FaqItem({ q, a, index }: FaqItemType & { index: number }) {
  // Estado local: só este item sabe se está aberto ou fechado
  const [open, setOpen] = useState(false);

  return (
    // Entrada animada: sobe e aparece ao entrar na viewport
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="glass-card rounded-xl overflow-hidden"
    >
      {/* Botão de toggle — `button` semântico para acessibilidade */}
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open} // informa leitores de tela sobre o estado
      >
        <span className="font-display font-semibold text-foreground text-base leading-snug">
          {q}
        </span>
        {/* Ícone que rotaciona 180° quando aberto */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      {/* AnimatePresence: habilita animação de SAÍDA (exit) do accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer" // key é obrigatória dentro de AnimatePresence
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} // animação ao fechar
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden" // esconde o conteúdo cortado durante a animação
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
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
      id="faq"
      className="py-24 bg-secondary/40 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o FAEX HUB e comece a aproveitar tudo que a
            plataforma oferece.
          </p>
        </motion.div>

        {/* Lista de accordions — max-w-3xl centraliza o conteúdo */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
