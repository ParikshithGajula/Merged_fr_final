import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Platform: ["QARO Routing", "QARLE Finance", "Q-MAS Agents", "Compiler Engine", "Control Tower"],
  Resources: ["Documentation", "API Reference", "Research Papers", "Case Studies", "Blog"],
  Company: ["About Us", "Careers", "Leadership", "Newsroom", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-quantix-dark flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" />
                  <rect x="11" y="3" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.6" />
                  <rect x="3" y="11" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.6" />
                  <rect x="11" y="11" width="6" height="6" rx="1" fill="hsl(174,100%,40%)" opacity="0.3" />
                </svg>
              </div>
              <span className="text-base font-bold text-quantix-dark">Quantix.Systems</span>
            </div>
            <p className="text-sm text-quantix-gray leading-relaxed mb-6 max-w-xs">
              Pioneering the application of hybrid quantum-classical computing and agentic AI for enterprise optimization.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-quantix-gray hover:text-foreground">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-quantix-gray hover:text-foreground">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-quantix-gray hover:text-foreground">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-quantix-dark mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-quantix-gray hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-quantix-gray">© 2026 Quantix Systems Inc. All rights reserved.</p>
          <a href="mailto:hello@quantix.systems" className="flex items-center gap-2 text-sm text-quantix-gray mt-4 md:mt-0">
            <Mail className="w-4 h-4" />
            hello@quantix.systems
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
