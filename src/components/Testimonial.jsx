import "../styles/testimonials.css";
import profile from "../assets/images/DummyPic.png";

function Testimonials() {
  return (
    <section className="testimonials-section">
      {/* Header */}
      <div className="testimonials-header">
        <span className="testimonials-tag">TESTIMONIALS</span>
        <h2 className="testimonials-title">
          Voices That Reflect Our Journey and Impact
        </h2>
      </div>

      {/* Cards */}
      <div className="testimonials-cards">
        {[1, 2, 3].map((_, i) => (
          <div className="testimonial-card" key={i}>
            {/* Quote Circle */}
            <div className="quote-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M7.38286 12.584C10.1889 9.542 14.4349 8 20.0009 8H22.0009V13.638L20.3929 13.96C17.6529 14.508 15.7469 15.586 14.7269 17.168C14.1945 18.0202 13.8926 18.9961 13.8509 20H20.0009C20.5313 20 21.04 20.2107 21.4151 20.5858C21.7901 20.9609 22.0009 21.4696 22.0009 22V36C22.0009 38.206 20.2069 40 18.0009 40H6.00086C5.47042 40 4.96172 39.7893 4.58664 39.4142C4.21157 39.0391 4.00086 38.5304 4.00086 38V28L4.00686 22.162C3.98886 21.94 3.60886 16.68 7.38286 12.584ZM40.0009 40H28.0009C27.4704 40 26.9617 39.7893 26.5866 39.4142C26.2116 39.0391 26.0009 38.5304 26.0009 38V28L26.0069 22.162C25.9889 21.94 25.6089 16.68 29.3829 12.584C32.1889 9.542 36.4349 8 42.0009 8H44.0009V13.638L42.3929 13.96C39.6529 14.508 37.7469 15.586 36.7269 17.168C36.1945 18.0202 35.8926 18.9961 35.8509 20H42.0009C42.5313 20 43.04 20.2107 43.4151 20.5858C43.7901 20.9609 44.0009 21.4696 44.0009 22V36C44.0009 38.206 42.2069 40 40.0009 40Z"
                  fill="#F9A825"
                />
              </svg>
            </div>

            {/* Text */}
            <p className="testimonial-text">
              At Mastercard, we believe in fostering excellence and nurturing
              future leaders, and our partnership with AIT Pune is a testament
              to that commitment. Stay tuned for more updates as we continue
              this incredible journey in search of exceptional talent. hello
            </p>

            {/* Divider */}
            <div className="testimonial-divider" />

            {/* Profile */}
            <div className="testimonial-profile">
              <img src={profile} alt="Profile" />
              <div>
                <p className="profile-name">Mr. Urvish Pande</p>
                <p className="profile-role">
                  Recruitments of Master Card
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
