import "../styles/testimonialNav.css";
import leftArrow from "../assets/icons/left.svg";
import rightArrow from "../assets/icons/right.svg";

function TestimonialNav({ total, active, onPrev, onNext }) {
  return (
    <div className="testimonial-nav">
      {/* LEFT ARROW */}
      <button className="nav-arrow light" onClick={onPrev}>
        <img src={leftArrow} alt="Previous" />
      </button>

      {/* DASHES */}
      <div className="nav-dashes">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`dash ${i === active ? "dark" : "light"}`}
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button className="nav-arrow dark" onClick={onNext}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
}

export default TestimonialNav;
