
const features = [
  { icon: "▤", title: "Manage Books", color: "brown" },
  { icon: "♙", title: "Track Members", color: "olive" },
  { icon: "↔", title: "Issue & Return", color: "gold" },
  { icon: "▥", title: "View Reports", color: "black" },
];

export default function Features() {
  return (
    <section
      className="features bg-[#FDF8E4]"
      id="features"
    >
      {features.map((feature) => (
        <a
          key={feature.title}
          href="#about"
          className="feature-item"
        >
          <span className={`feature-icon ${feature.color}`}>
            {feature.icon}
          </span>

          <span className="feature-title">
            {feature.title}
          </span>

          <span className="feature-arrow">↗</span>
        </a>
      ))}
    </section>
  );
}
