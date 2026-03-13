/**
 * components/ui/button.tsx — Componente de botão reutilizável
 *
 * Conceitos importantes:
 *
 * 1. forwardRef: permite que o componente pai acesse o elemento <button> real
 *    via uma ref (referência ao DOM). Necessário quando outros componentes
 *    precisam controlar foco, animações ou medir o botão diretamente.
 *
 * 2. Variant pattern: em vez de criar ButtonPrimary, ButtonAccent, etc.
 *    separados, usamos uma prop `variant` que seleciona um conjunto de classes
 *    num objeto `Record`. Isso mantém a API do componente simples e extensível.
 *
 * 3. extends HTMLAttributes: ao herdar os atributos nativos do <button>,
 *    o componente aceita automaticamente onClick, disabled, type, aria-*, etc.
 *    Não precisamos declarar cada prop manualmente.
 *
 * 4. ...props (spread): passa todos os atributos HTML restantes diretamente
 *    para o elemento <button>, mantendo compatibilidade com o HTML nativo.
 *
 * 5. displayName: necessário quando se usa forwardRef, pois o React não
 *    consegue inferir o nome do componente automaticamente. Aparece no DevTools.
 */

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "accent" | "hero-outline" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// Record<Chave, Valor>: tipo TypeScript para objetos com chaves e valores tipados.
// Garante que toda variant e size listada no tipo tenha uma entrada no objeto.
const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
  "hero-outline":
    // backdrop-blur-sm: glassmorphism leve para o botão sobre o hero gradient
    "border-2 border-primary-foreground/60 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 backdrop-blur-sm",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  default: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Classes base — aplicadas em todos os botões independente de variante
          "inline-flex items-center justify-center gap-2 rounded-lg font-display font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          // className do exterior sobrescreve — permite customização pontual
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
