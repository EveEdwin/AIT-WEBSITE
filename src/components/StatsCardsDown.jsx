import "../styles/statsCards.css";

const stats = [
  {
    value: "₹56 LPA",
    label: "Highest Package Offered FY 25-26",
  },
  {
    value: "95% ",
    label: "Placement Record",
  },
  {
    value: "100+",
    label: "Events Hosted by Clubs Each Year",
  },
 
];

function StatsCardsDown() {
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

export default StatsCardsDown;
