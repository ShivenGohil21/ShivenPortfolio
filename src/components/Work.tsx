import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "Excel Analytics Portal",
    category: "Full Stack Dashboard",
    tools: "MERN + Bootstrap",
    image: "/images/Excel-analytics.png",
    github: "https://github.com/ShivenGohil21",
    link: "https://excel-project-2.onrender.com/"
  },
  {
    title: "Pharmacy App Design (iCare)",
    category: "UI/UX Design",
    tools: "Figma",
    image: "/images/PharmacyApp.png",
    github: "https://github.com/ShivenGohil21",
    link: "https://www.figma.com/proto/v5veq8Cb6yA6EucSzMhvJy/Untitled?node-id=27-11",
    layout: "mobile"
  },
  {
    title: "Fake News Predictions",
    category: "Machine Learning",
    tools: "Python, Scikit-learn, NLTK, TF-IDF, Logistic Regression",
    image: "/images/Repository.png",
    github: "https://github.com/ShivenGohil21/Fake-News-Prediction",
    link: "https://github.com/ShivenGohil21/Fake-News-Prediction",
    layout: "logo"
  },
  {
    title: "Gemini Clone",
    category: "Web Development",
    tools: "React-JS, Gemini API",
    image: "/images/Gemini-clone.png",
    github: "https://github.com/ShivenGohil21",
    link: "https://github.com/ShivenGohil21"
  },
  {
    title: "GATE Quiz Portal",
    category: "Full Stack Platform",
    tools: "Django + React-JS + Tailwindcss + Supabase",
    image: "/images/Quiz-portal.png",
    github: "https://github.com/ShivenGohil21/QuizPortal",
    link: "https://github.com/ShivenGohil21/QuizPortal"
  },
  {
    title: "Bookmark",
    category: "Full Stack Platform",
    tools: "NextJS + Supabase",
    image: "/images/BookmarkApp.png",
    github: "https://github.com/ShivenGohil21/Bookmark",
    link: "https://bookmark21-bigjxkqmn-shivens-projects-aacaa513.vercel.app/"
  },
  {
    title: "MackBook Site",
    category: "Frontend Platform",
    tools: "ThreeJS + GSAP + ReactJS",
    image: "/images/MackbookApp.png",
    github: "https://github.com/ShivenGohil21/Macbook-site",
    link: "https://macbook-site-ashy.vercel.app/"
  }
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeIndex];

  return (
    <div className="work-section" id="work">
      {/* Absolute Arrows relative to section */}
      <button className="work-nav-side prev" onClick={prevProject} aria-label="Previous">
        <FaArrowLeft />
      </button>
      <button className="work-nav-side next" onClick={nextProject} aria-label="Next">
        <FaArrowRight />
      </button>

      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
        </div>
        <div className="work-separator"></div>

        <div className="work-carousel-container">
          <div className="work-item">
            <div className="work-content">
              <span className="work-number">0{activeIndex + 1}</span>
              <div className="work-details">
                <h3 className="work-title-main">{currentProject.title}</h3>
                <p className="work-subtitle">{currentProject.category}</p>

                <div className="work-tools-section">
                  <h4>TOOLS & FEATURES</h4>
                  <p>{currentProject.tools}</p>
                </div>
              </div>
            </div>

            <div className={`work-showcase ${currentProject.layout ? `${currentProject.layout}-layout` : ""}`}>
              <div className="work-monitor">
                <div className="monitor-screen">
                  <WorkImage
                    image={currentProject.image}
                    alt={currentProject.title}
                    link={currentProject.link}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-pagination">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
