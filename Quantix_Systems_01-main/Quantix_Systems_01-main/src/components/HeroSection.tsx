import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center pt-16 pb-12 px-4">
      {/* Announcement badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-quantix-cyan/30 bg-quantix-cyan/5 mb-8">
        <Zap className="w-4 h-4 text-quantix-cyan" />
        <span className="text-sm text-quantix-cyan font-medium">Quantix OS v2.4 Now Available</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
        <span className="text-quantix-dark">Optimization at</span>
        <br />
        <span className="bg-gradient-to-r from-quantix-blue to-quantix-cyan bg-clip-text text-transparent">
          Quantum Scale
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg text-quantix-gray leading-relaxed mb-10">
        The world's first hybrid quantum-classical agentic platform for
        logistics, supply chain, and financial portfolio optimization. Solve the
        impossible, instantly.
      </p>

      {/* CTA buttons */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-quantix-blue text-white text-base font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
          Request Demo
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="text-base font-medium px-8 py-4 rounded-full border border-border text-foreground hover:bg-muted transition-colors">
          Explore Technology
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
