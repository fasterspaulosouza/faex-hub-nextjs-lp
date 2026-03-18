export default function Footer() {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="font-display font-bold text-sm text-primary-foreground">
                F
              </span>
            </div>
            <span className="font-display font-bold text-lg text-background">
              FAEX HUB
            </span>
          </div>

          <p className="text-sm" style={{ color: "rgb(255 255 255 / 0.5)" }}>
            @ 2026 - FAEX HUB. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
