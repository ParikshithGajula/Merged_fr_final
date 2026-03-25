import { Database, Settings, Binary, Zap } from "lucide-react";

const steps = [
  { icon: Database, title: "Enterprise Data", subtitle: "ERP, IoT, APIs" },
  { icon: Settings, title: "Multi-Agent AI", subtitle: "Context & Formulation" },
  { icon: Binary, title: "QUBO Matrix", subtitle: "Mathematical Translation" },
  { icon: Zap, title: "Hybrid Solver", subtitle: "Quantum & Classical Compute" },
];

const ArchitectureWorkflow = () => {
  return (
    <section className="py-24 px-4 bg-quantix-light-gray">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-quantix-dark mb-4">Architecture Workflow</h2>
        <p className="text-base text-quantix-gray mb-16">
          From raw enterprise data to optimal physical execution in milliseconds.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl border border-border bg-background flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-quantix-dark" />
              </div>
              <h3 className="text-base font-semibold text-quantix-dark mb-1">{step.title}</h3>
              <p className="text-sm text-quantix-cyan">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureWorkflow;
