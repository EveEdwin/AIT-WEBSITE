import "../styles/infoBar.css";

function InfoBar() {
  const text =
    "National Institutional Ranking Framework, Engineering (Rank-band: 201–300) | " +
    "Affiliated to SPPU | " +
    "NBA Accreditation for all UG departments | " +
    "Best Professional College Award 2016–17 by SPPU | " +
    "AICTE–CII Survey of Industry-linked Institutes 2020, Rank-Gold";

  return (
    <div className="info-bar">
      <div className="info-track">
        <span>{text}</span>
        <span>{text}</span> {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}

export default InfoBar;