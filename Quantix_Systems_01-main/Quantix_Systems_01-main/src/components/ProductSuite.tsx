import { ArrowRight, Box, TrendingUp, Cpu, Layers, LayoutGrid } from "lucide-react";

const products = [
  {
    icon: Box,
    name: "QARO",
    category: "LOGISTICS & SUPPLY CHAIN",
    categoryColor: "text-quantix-cyan",
    description: "Dynamic routing, fleet optimization, and real-time inventory balancing using hybrid quantum annealing algorithms.",
  },
  {
    icon: TrendingUp,
    name: "QARLE",
    category: "FINANCIAL RISK & PORTFOLIO",
    categoryColor: "text-quantix-blue",
    description: "Calculate optimal asset allocation and risk exposure across millions of variables in milliseconds.",
  },
  {
    icon: Cpu,
    name: "Q-MAS",
    category: "MULTI-AGENT DECISION SYSTEM",
    categoryColor: "text-quantix-blue",
    description: "Autonomous agents that continuously monitor enterprise data and formulate optimization requests automatically.",
  },
  {
    icon: Layers,
    name: "Q-ASE",
    category: "ADAPTIVE SOLVER ENGINE",
    categoryColor: "text-quantix-cyan",
    description: "The core compiler that translates business logic into QUBO matrices and routes them to optimal hardware.",
  },
  {
    icon: LayoutGrid,
    name: "Control Tower",
    category: "ENTERPRISE DASHBOARD",
    categoryColor: "text-quantix-blue",
    description: "Single pane of glass for monitoring solver performance, ROI metrics, and agentic workflows.",
  },
];

const ProductSuite = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-quantix-dark text-center mb-4">
          Enterprise Product Suite
        </h2>
        <p className="text-base text-quantix-gray text-center max-w-2xl mx-auto mb-16">
          Modular, deployable solutions designed to integrate seamlessly with your
          existing SAP, Oracle, or custom ERP systems.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%+0.75rem)] mx-auto md:mx-0">
          {products.slice(3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-lg bg-quantix-light-gray flex items-center justify-center mb-6">
      <product.icon className="w-5 h-5 text-quantix-gray" />
    </div>
    <h3 className="text-xl font-bold text-quantix-dark mb-1">{product.name}</h3>
    <p className={`text-xs font-bold tracking-widest ${product.categoryColor} uppercase mb-4`}>
      {product.category}
    </p>
    <p className="text-sm text-quantix-gray leading-relaxed mb-6">{product.description}</p>
    <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-quantix-blue">
      Learn more <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

export default ProductSuite;
