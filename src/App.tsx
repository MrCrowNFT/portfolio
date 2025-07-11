import "./App.css";
import "./styles/global.css";
import ContactForm from "./components/contact-form";
import InfoSection from "./components/info-section";
import ProjectSection from "./components/projects-section";
import TechCarousel from "./components/tech-carousel";
import { socialMedia } from "./data/info-data";
import Img from "./assets/Luciano.png";
import cv from "./data/Luciano_cv.pdf"

function App() {
  return (
    <div className="portfolio-app">
      <header className="py-4">
        <div className="container mx-auto"></div>
      </header>

      <main>
        {/* Info Section */}
        <section className="hero-section py-12">
          <div className="container mx-auto p-4">
            <InfoSection
              imageSrc={Img}
              altText="Luciano profile picture"
              platforms={socialMedia}
              cvUrl={cv}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-dark">
          <ProjectSection />
        </section>

        {/* Skills Section */}
        <section className="skills-section py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-2xl font-bold mb-6 text-center">
              My Tech Stack
            </h2>
            <TechCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-dark">
          <div className="container mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-6 text-center">
        <div className="container mx-auto">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Luciano. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
