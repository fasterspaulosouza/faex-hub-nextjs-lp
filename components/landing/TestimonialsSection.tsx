"use client";

import { useRef } from "react";
import SubHeader from "../SubHeader";

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
    </section>
  );
}
