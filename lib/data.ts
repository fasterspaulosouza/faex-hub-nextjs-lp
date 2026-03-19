/**
 * lib/data.ts — Dados estáticos da landing page
 *
 * Centralizar os dados aqui separa "conteúdo" de "apresentação":
 * - Os componentes cuidam de COMO renderizar (animações, layout, JSX)
 * - Este arquivo cuida de O QUÊ renderizar (textos, ícones, listas)
 *
 * Benefícios práticos:
 * 1. Para atualizar um texto ou adicionar um item, basta mexer aqui
 * 2. Os componentes ficam menores e mais fáceis de ler
 * 3. Fácil de substituir por dados vindos de uma API ou CMS no futuro
 *
 * LucideIcon é o tipo TypeScript que representa qualquer ícone da biblioteca Lucide.
 * Usar esse tipo garante que só componentes de ícone válidos sejam passados.
 */

import type { LucideIcon } from "lucide-react";
import {
  Users,
  BookOpen,
  Sparkles,
  Bell,
  MessageCircle,
  Heart,
  LayoutDashboard,
  BarChart3,
  Shield,
  Share2,
  GraduationCap,
  Camera,
  Calendar,
  Award,
  Globe,
} from "lucide-react";

// ─── Tipos ───────────────────────────────────────────────────────────────────

/** Item de feature com ícone, título e descrição curta */
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/** Link de navegação do Header */
export interface NavLink {
  label: string;
  /** href aponta para o id da seção, ex: "#app" → <section id="app"> */
  href: string;
}

/** Card de estatística exibido no Hero */
export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

/** Depoimento de aluno ou professor */
export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  content: string;
  rating: number;
}

/** Pergunta e resposta do FAQ */
export interface FaqItem {
  q: string;
  a: string;
}

// ─── Dados ───────────────────────────────────────────────────────────────────

/**
 * Links da navegação principal.
 * O href usa "#id" para referenciar o id de cada seção da página.
 * O Header intercepta o clique e faz scroll suave até o elemento.
 */
export const navLinks: NavLink[] = [
  { label: "Aplicativo", href: "#app" },
  { label: "Sistema Web", href: "#web" },
  { label: "Recursos", href: "#features" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Estatísticas exibidas no Hero Banner.
 * Números pequenos com impacto visual para construir credibilidade.
 */
export const heroStats: StatItem[] = [
  { icon: Users, label: "Alunos", value: "500+" },
  { icon: BookOpen, label: "Conteúdos", value: "1.2K" },
  { icon: Sparkles, label: "Interações", value: "10K+" },
];

/**
 * Features do aplicativo mobile (AppSection).
 * Foco em mobilidade e interação em tempo real.
 */
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

/**
 * Features do sistema web (WebSection).
 * Foco em gestão, métricas e controle — recursos de professor/gestor.
 */
export const webFeatures: FeatureItem[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard completo",
    desc: "Visualize métricas, atividades e engajamento.",
  },
  {
    icon: BarChart3,
    title: "Relatórios detalhados",
    desc: "Acompanhe o progresso acadêmico com dados.",
  },
  {
    icon: Shield,
    title: "Gestão de turmas",
    desc: "Organize turmas, disciplinas e participantes.",
  },
];

/**
 * Cards de recursos gerais da plataforma (FeaturesSection).
 * 6 cards em grid 3 colunas — número escolhido para preencher bem o layout.
 */
export const platformFeatures: FeatureItem[] = [
  {
    icon: Share2,
    title: "Compartilhamento fácil",
    desc: "Publique fotos, textos e materiais com um clique.",
  },
  {
    icon: GraduationCap,
    title: "Foco acadêmico",
    desc: "Conteúdo centrado na experiência educacional.",
  },
  {
    icon: Camera,
    title: "Galeria de momentos",
    desc: "Registre e reviva os melhores momentos em aula.",
  },
  {
    icon: Calendar,
    title: "Agenda integrada",
    desc: "Acompanhe eventos, prazos e atividades.",
  },
  {
    icon: Award,
    title: "Reconhecimentos",
    desc: "Destaque e valorize contribuições da comunidade.",
  },
  {
    icon: Globe,
    title: "Acesso universal",
    desc: "Disponível no celular e no computador.",
  },
];

/**
 * Depoimentos de usuários (TestimonialsSection).
 * Mix de alunos e professores para representar ambos os públicos.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Ana Carolina",
    role: "Aluna de Engenharia",
    initials: "AC",
    rating: 5,
    content:
      "O FAEX HUB transformou minha experiência acadêmica. Consigo compartilhar projetos, tirar dúvidas e me conectar com professores de forma muito mais fácil.",
  },
  {
    name: "Prof. Dr. Roberto Silva",
    role: "Professor de Administração",
    initials: "RS",
    rating: 5,
    content:
      "Como professor, consigo acompanhar o engajamento dos alunos de perto. A plataforma facilita a troca de materiais e o feedback contínuo.",
  },
  {
    name: "Lucas Mendes",
    role: "Aluno de Direito",
    initials: "LM",
    rating: 5,
    content:
      "Adoro a agenda integrada! Nunca mais perdi um prazo importante. E a comunidade é super engajada e colaborativa.",
  },
  {
    name: "Profa. Dra. Juliana Costa",
    role: "Coordenadora de Cursos",
    initials: "JC",
    rating: 5,
    content:
      "A plataforma criou uma nova dinâmica de interação entre alunos e docentes. O ambiente é seguro e focado no aprendizado.",
  },
  {
    name: "Mariana Oliveira",
    role: "Aluna de Psicologia",
    initials: "MO",
    rating: 5,
    content:
      "A galeria de momentos é incrível! Consigo registrar todas as experiências da faculdade e compartilhar com meus colegas.",
  },
  {
    name: "Prof. Gustavo Almeida",
    role: "Professor de Tecnologia",
    initials: "GA",
    rating: 5,
    content:
      "A versatilidade da plataforma impressiona. Tanto no app quanto na web, a experiência é fluida e intuitiva para todos.",
  },
];

/**
 * Perguntas frequentes (FaqSection).
 * Cobre dúvidas sobre acesso, segurança e público-alvo.
 */
export const faqs: FaqItem[] = [
  {
    q: "O que é o FAEX HUB?",
    a: "O FAEX HUB é uma plataforma completa que reúne aplicativo móvel e sistema web para conectar alunos e professores em uma experiência acadêmica integrada e colaborativa.",
  },
  {
    q: "O aplicativo está disponível para iOS e Android?",
    a: "Sim! O aplicativo FAEX HUB está disponível para dispositivos iOS e Android, garantindo que toda a comunidade acadêmica possa se conectar de qualquer lugar.",
  },
  {
    q: "Como posso acessar o sistema web?",
    a: 'O sistema web pode ser acessado diretamente pelo navegador, sem necessidade de instalação. Basta clicar em "Acessar Plataforma" e fazer login com suas credenciais.',
  },
  {
    q: "Quem pode usar o FAEX HUB?",
    a: "O FAEX HUB é voltado para alunos, professores e gestores da instituição FAEX. O acesso é feito com as credenciais fornecidas pela instituição.",
  },
  {
    q: "Minhas informações estão seguras?",
    a: "Sim. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança para garantir a privacidade e proteção de todos os dados.",
  },
  {
    q: "Como entro em contato com o suporte?",
    a: "Você pode entrar em contato com nossa equipe de suporte diretamente pelo aplicativo, pelo sistema web ou através dos canais oficiais da FAEX.",
  },
];
