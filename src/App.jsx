import Navbar from "./components/Navbar";
import InfoBar from "./components/InfoBar";
import HeroVideo from "./components/HeroVideo";
import ExcellenceSection from "./components/ExcellenceSection";
import AboutSection from "./components/AboutSection";
import StatsCards from "./components/StatsCards";
import StatsCardsDown from "./components/StatsCardsDown";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import PastRecruiters from "./components/PastRecruiters";
import Testimonials from "./components/Testimonial";
import Departments from "./components/Departments";

function App() {
  return (
    <div>
      <Navbar />
      <InfoBar />
      <HeroVideo />
      <ExcellenceSection />
      <AboutSection />
      <StatsCards />
      <StatsCardsDown />
      <Departments />
      <PastRecruiters />
      <Testimonials />
      <Newsletter />
      <Footer />
      {/* <h1>Hello React + Vite 🚀</h1> */}
    </div>
  );
}

export default App;
