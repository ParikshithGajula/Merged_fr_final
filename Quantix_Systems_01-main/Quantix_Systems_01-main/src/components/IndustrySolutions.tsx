import { Truck, Building2, TrendingUp, Zap, BarChart3, Shield } from "lucide-react";

const industries = [
  { icon: Truck, title: "Logistics & Routing", description: "Minimize fuel cost and delivery times across global supply chains." },
  { icon: Building2, title: "Smart Cities", description: "Optimize traffic flow and grid distribution dynamically." },
  { icon: TrendingUp, title: "Financial Services", description: "Real-time risk assessment and portfolio rebalancing." },
  { icon: Zap, title: "Energy Grid", description: "Balance renewable load generation with consumption peaks." },
  { icon: BarChart3, title: "Manufacturing", description: "Job shop scheduling and resource allocation on the factory floor." },
  { icon: Shield, title: "Defense", description: "Strategic resource deployment and supply line resilience." },
];

const IndustrySolutions = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-quantix-dark text-center mb-16">Industry Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-background border border-border rounded-xl p-6">
              <industry.icon className="w-6 h-6 text-quantix-dark mb-4" />
              <h3 className="text-base font-semibold text-quantix-dark mb-2">{industry.title}</h3>
              <p className="text-sm text-quantix-gray leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
