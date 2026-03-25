import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-quantix-dark to-[hsl(220,30%,8%)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Build the Future of Optimization
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          Join the world's most innovative enterprises using hybrid quantum AI to unlock
          unprecedented efficiency and scale.
        </p>
        <button className="flex items-center gap-2 mx-auto bg-quantix-blue text-white text-base font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
          Request a Custom Demo
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
