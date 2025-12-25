import "../styles/heroVideo.css";
import heroVideo from "../assets/video/Welcome to Cambridge!.mp4"; // change path if needed

function HeroVideo() {
  return (
    <section className="hero-wrapper">
      <div className="hero-video-container">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}

export default HeroVideo;