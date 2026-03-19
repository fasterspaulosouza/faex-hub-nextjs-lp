import { BookOpen, LucideIcon, Sparkles, Users } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const navLinks: NavLink[] = [
  { label: "Aplicativo", href: "#app" },
  { label: "Sistema Web", href: "#web" },
  { label: "Recursos", href: "#features" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats: StatItem[] = [
  { icon: Users, label: "Alunos", value: "500+" },
  { icon: BookOpen, label: "Conteúdos", value: "1.2K" },
  { icon: Sparkles, label: "Interações", value: "10K+" },
];
