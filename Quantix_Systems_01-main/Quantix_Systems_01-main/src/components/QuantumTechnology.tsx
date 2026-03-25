import { Hexagon, Cpu, GitBranch } from "lucide-react";

const QuantumTechnology = () => {
  return (
    <section className="py-24 px-4 bg-quantix-light-gray">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-quantix-dark leading-tight mb-6">
            Quantum Technology at the Core
          </h2>
          <p className="text-base text-quantix-gray leading-relaxed mb-8">
            We leverage Ising models, Quantum Approximate Optimization Algorithms (QAOA), and proprietary quantum annealing techniques to solve NP-Hard problems that bring classical supercomputers to a halt.
          </p>
          <button className="px-6 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-background transition-colors">
            Read Research Papers
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-background border border-border rounded-xl p-5">
            <Hexagon className="w-6 h-6 text-quantix-cyan mb-3" />
            <h3 className="text-base font-semibold text-quantix-dark mb-2">QUBO Formulation</h3>
            <p className="text-sm text-quantix-gray leading-relaxed">Quadratic Unconstrained Binary Optimization structures map business constraints natively to quantum states.</p>
          </div>
          <div className="col-span-1 bg-background border border-border rounded-xl p-5">
            <Cpu className="w-6 h-6 text-quantix-cyan mb-3" />
            <h3 className="text-base font-semibold text-quantix-dark mb-2">Hardware Agnostic</h3>
            <p className="text-sm text-quantix-gray leading-relaxed">Compile once, run on D-Wave, IBM Quantum, IonQ, or classical tensor networks seamlessly.</p>
          </div>
          <div className="col-span-2 bg-background border border-border rounded-xl p-5">
            <GitBranch className="w-6 h-6 text-quantix-cyan mb-3" />
            <h3 className="text-base font-semibold text-quantix-dark mb-2">Hybrid Heuristics</h3>
            <p className="text-sm text-quantix-gray leading-relaxed">When pure quantum isn't enough, our engine decomposes problems, sending only the most complex sub-graphs to the QPU while solving the rest classically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumTechnology;
