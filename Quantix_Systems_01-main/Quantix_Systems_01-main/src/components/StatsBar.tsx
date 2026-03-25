const stats = [
  { value: "10M+", label: "VARIABLES" },
  { value: "100M+", label: "CONSTRAINTS" },
  { value: "< 50ms", label: "SOLVE TIME" },
  { value: "99.999%", label: "UPTIME" },
];

const StatsBar = () => {
  return (
    <section className="border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl md:text-4xl font-bold text-quantix-dark tracking-tight">{stat.value}</div>
            <div className="text-xs font-semibold text-quantix-gray tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
