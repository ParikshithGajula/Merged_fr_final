import { Globe, Cpu, Settings, Layers, Box } from "lucide-react";

const capabilities = [
  { icon: Box, label: "Quantum Optimization Models" },
  { icon: Settings, label: "QUBO Formulation Engines" },
  { icon: Cpu, label: "Agentic AI Decision Systems" },
  { icon: Layers, label: "Hybrid Quantum-Classical Solvers" },
  { icon: Globe, label: "Global Optimization Platforms" },
];

const PlatformSection = () => {
  return (
    <section className="py-24 px-4 bg-quantix-light-gray">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-bold tracking-widest text-quantix-cyan uppercase mb-4">THE QUANTIX PLATFORM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-quantix-dark leading-tight mb-6">
            Bridging the gap between classical compute and quantum potential.
          </h2>
          <p className="text-base text-quantix-gray leading-relaxed mb-8">
            Quantix Systems delivers an enterprise-grade abstraction layer that
            translates complex business problems into mathematical models
            solvable by today's most advanced quantum and classical
            hardware. Our agentic AI continuously routes workloads to the
            optimal solver environment.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-quantix-cyan font-medium text-sm hover:underline">
            Read the Whitepaper
            <Globe className="w-4 h-4" />
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {capabilities.map((cap) => (
            <div key={cap.label} className="inline-flex items-center gap-3 bg-background rounded-xl px-5 py-3.5 shadow-sm border border-border w-fit">
              <cap.icon className="w-5 h-5 text-quantix-cyan" />
              <span className="text-sm font-medium text-quantix-dark">{cap.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
