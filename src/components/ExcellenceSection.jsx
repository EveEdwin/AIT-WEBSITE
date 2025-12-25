import "../styles/excellenceSection.css";

import dataquest from "../assets/images/source/dataquest.png";
import theweek from "../assets/images/source/theweek.png";
import indiatoday from "../assets/images/source//indiatoday.png";

function ExcellenceSection() {
  return (
    <section className="excellence-wrapper">
      {/* LEFT */}
      <h2 className="excellence-title">
        30+ Years of Excellence
      </h2>

      {/* RIGHT */}
      <div className="rankings">
  <p className="rankings-label">NATIONAL RANKINGS</p>

  <div className="rankings-outer">
    {/* Item 1 */}
    <div className="rankings-inner">
      <span className="ranking-number">28</span>
      <img src={dataquest} alt="Dataquest" />
    </div>

    {/* Item 2 */}
    <div className="rankings-inner">
      <span className="ranking-number">38</span>
      <img src={theweek} alt="The Week" />
    </div>

    {/* Item 3 */}
    <div className="rankings-inner">
      <span className="ranking-number">54</span>
      <img src={indiatoday} alt="India Today" />
    </div>
  </div>
</div>

    </section>
  );
}

export default ExcellenceSection;
