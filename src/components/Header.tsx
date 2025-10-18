import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span>Nível360</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/diagnostico" className="text-foreground hover:text-primary transition-colors">
            Diagnóstico
          </Link>
          <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
};
