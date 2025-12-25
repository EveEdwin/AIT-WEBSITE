import "../styles/statsCards.css";

const stats = [
  {
    value: "2000+",
    label: "Students are Currently Enrolled",
  },
  {
    value: "UG, PG & PhD",
    label: "Courses",
  },
  {
    value: "100+",
    label: "Highly Qualified Professors",
  },
  {
    value: "500+",
    label: "Research Papers/Patents",
  },
];

function StatsCards() {
  return (
    <section className="stats-outer">
      {stats.map((item, index) => (
        <div className="stats-card" key={index}>
          <h3 className="stats-value">{item.value}</h3>
          <p className="stats-label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;
