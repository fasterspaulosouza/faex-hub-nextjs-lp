"use client";

import { navLinks } from "@/lib/data";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(e: React.MouseEvent<HTMLElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    const target = href === "#" ? document.body : document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0  left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? "glass-card py-3" : "py-5 bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
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
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center p-1">
          <Button variant="default" size="lg">
            Acessar Plataforma
          </Button>
        </div>
      </div>
    </header>
  );
}
