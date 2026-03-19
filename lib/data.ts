import {
  Bell,
  BookOpen,
  Heart,
  LucideIcon,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
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

export const appFeatures: FeatureItem[] = [
  {
    icon: Bell,
    title: "Notificações em tempo real",
    desc: "Fique por dentro de tudo que acontece na sua turma.",
  },
  {
    icon: MessageCircle,
    title: "Chat integrado",
    desc: "Converse com colegas e professores diretamente.",
  },
  {
    icon: Heart,
    title: "Reações e interações",
    desc: "Curta e comente nos conteúdos compartilhados.",
  },
];
