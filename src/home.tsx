import ContactForm from "./components/contact-form";
import InfoSection from "./components/info-section";
import ProjectSection from "./components/projects-section";
import TechCarousel from "./components/tech-carousel";
import { socialMedia } from "./data/info-data";

//todo move this to the app, since no other page, don't really need this
//todo move the titles to the left
const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <InfoSection
          imageSrc="/path/to/your/image.jpg"
          altText="Luciano profile picture"
          platforms={socialMedia}
          cvUrl="/path/to/your/resume.pdf"
        />
      </div>
      <ProjectSection />
      <section className="skills-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-2xl font-bold mb-6 text-center">
            My Tech Stack
          </h2>
          <TechCarousel />
        </div>
      </section>
      <ContactForm />
    </>
  );
};
export default Home;
