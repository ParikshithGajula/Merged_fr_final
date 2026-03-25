import { ArrowRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["Platform", "Solutions", "Technology", "Industries", "Research", "Partners", "Company", "Contact"];

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 bg-background border-b border-border" style={{ height: "var(--nav-height)" }}>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-quantix-dark flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" />
            <rect x="11" y="3" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.6" />
            <rect x="3" y="11" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.6" />
            <rect x="11" y="11" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.3" />
          </svg>
        </div>
        <span className="text-lg font-bold text-foreground">
          Quantix<span className="text-foreground">.</span>Systems
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button className="flex items-center gap-2 bg-quantix-blue text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Request Demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
