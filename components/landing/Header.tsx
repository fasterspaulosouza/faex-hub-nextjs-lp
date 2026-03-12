"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // useEffect(() => {

  // }, [])

  function scrollToSection(e: React.MouseEvent<HTMLElement>, href: string) {}

  return (
    <header
      ref={headerRef}
      className={`fixed top-0  left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? "glass-card py-3" : "py-5 bg-transparent"}`}
    >
      <div className="container mx-auto flex item-center justify-between px-6">
        {/* Logo — clique retorna ao topo */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
            <span className="font-display font-bold text-lg text-primary-foreground">
              F
            </span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            FAEX <span className="text-gradient">HUB</span>
          </span>
        </a>

        {/* Navegação Desktop */}
      </div>
    </header>
  );
}
