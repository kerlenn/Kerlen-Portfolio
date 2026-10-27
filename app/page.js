// app/page.js

import ProjectCarousel from "@/components/ProjectCarousel";
import AboutMarquee from "@/components/AboutMarquee";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StarField from "@/components/StarField";
import { assetPath } from "@/lib/assetPath";
import { projects } from "@/data/projects";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const skills = ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "SQL", "JavaScript", "Next.js", "Git"];

const contacts = [
  ["Email", "kerlenninamae@email.com", "mailto:you@email.com"],
  ["GitHub", "github.com/kerlenn", "https://github.com/username"],
  ["LinkedIn", "linkedin.com/in/kerlennina", "https://linkedin.com/in/username"],
];

export default function Page() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="hero">

        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-1" />
        <div className="hero-orbit hero-orbit-2" />

        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="container hero-content">
          <div className="hero-copy">

            <div className="hero-status hero-in d1">
              <span className="status-dot" />
              <span>CREATIVE TECHNOLOGIST</span>
            </div>

            <p className="hero-kicker hero-in d2">
              Technology <span>×</span> Creativity
            </p>

            <h1 className="hero-title hero-in d3">
              Hi, I'm
              <br />
              <span className="grad-text">Kerlen Nina Mae.</span>
            </h1>

            <p className="hero-description hero-in d4">
              Informatics Engineering student focused on full-stack software development and data analytics, transforming raw data into actionable insights and scalable applications.
            </p>

            <div className="hero-actions hero-in d4">
              <a href="#projects" className="hero-btn hero-btn-primary">
                Explore My Work
              </a>

              <a href="#contact" className="hero-btn hero-btn-secondary">
                Let's Connect
                <span>→</span>
              </a>
            </div>

            <div className="hero-meta hero-in d4">
              <span>BASED IN INDONESIA</span>
              <span className="meta-line" />
              <span>BUILDING DIGITAL EXPERIENCES</span>
            </div>

          </div>

          {/* PHOTO */}
          <div className="hero-visual hero-in d3">
            <div className="portrait-glow" />

            <div className="portrait-frame">
              <div className="portrait-corner portrait-corner-tl" />
              <div className="portrait-corner portrait-corner-br" />

              <div className="portrait-image">
                <Image
                  src={assetPath("/images/kerlennn.jpg")}
                  alt="Kerlen"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">

          {/* SECTION HEADER */}
          <Reveal>
            <div className="section-label">
              <span>01</span>
              <div />
              <span>ABOUT ME</span>
            </div>
          </Reveal>

          <div className="about-layout">

            {/* LEFT */}
            <Reveal direction="left">
              <div className="about-intro">

                <p className="about-kicker">
                  A LITTLE ABOUT ME
                </p>

                <h2>
                  Technology is my
                  <span> canvas.</span>
                </h2>

                <p className="about-description">
                  I am an Informatics Engineering student at Tarumanagara University with a strong focus on Software Engineering and Data Analytics. I combine technical precision in building responsive web applications with data-driven insights to create efficient, high-performing digital solutions. Driven by a problem-solving mindset and strong analytical skills, I bridge software engineering with user-centric functionality to turn complex data into actionable tech products.
                </p>

              </div>
            </Reveal>


            {/* RIGHT */}
            <Reveal direction="right" delay={150}>
              <div className="about-card">

                {/* FOTO PROFIL */}
                <div className="about-photo">
                  <img
                    src={assetPath("/images/gsa.jpg")}
                    alt="Kerlen Nina Mae"
                  />
                </div>

                <div className="about-card-bottom">
                  <strong>GOOGLE STUDENT AMBASSADOR BATCH 2</strong>
                  <span> 1st October 2026 - 31st Januari 2027 </span>
                </div>

              </div>
            </Reveal>

          </div>


          {/* INTERESTS */}
          <Reveal delay={150}>
            <div className="about-focus">

              <div className="focus-heading">
                <span>WHAT I LOVE TO EXPLORE</span>
              </div>

              <div className="focus-list">

                <div className="focus-item">
                  <span>01</span>
                  <h3>Software Engineering</h3>
                  <p>
                    Building scalable web applications and robust system architectures.
                  </p>
                </div>

                <div className="focus-item">
                  <span>02</span>
                  <h3>Data Analytics</h3>
                  <p>
                    Extracting insights, data processing, and predictive modeling.
                  </p>
                </div>

                <div className="focus-item">
                  <span>03</span>
                  <h3>Machine Learning & AI</h3>
                  <p>
                    Developing intelligent algorithms and real-world AI applications.
                  </p>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
        <AboutMarquee />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">

        <div className="container">

          <Reveal>
            <div className="section-label">
              <span>02</span>
              <div />
              <span>SELECTED WORK</span>
            </div>
          </Reveal>



          <Reveal>
            <div className="projects-heading">
              <div>
                <p className="projects-kicker">
                  CREATIVE + DIGITAL WORK
                </p>

                <h2>
                  Things I've <span>created.</span>
                </h2>
              </div>
            </div>
          </Reveal>



          <div className="projects-list">

            {projects.map((project, index) => (

              <Reveal
                key={project.id}
                delay={index * 80}
              >

                <article className="project-category">

                  <div className="project-category-header">

                    <div>
                      <span className="project-category-number">
                        {project.number}
                      </span>

                      <span className="project-category-name">
                        {project.category}
                      </span>
                    </div>

                    <div className="project-category-line" />

                  </div>


                  <div className="project-category-content">

                    <div className="project-category-info">

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>


                      <div className="project-tools">
                        {project.tools.map((tool) => (
                          <span
                            className="project-tool-icon"
                            key={tool.name}
                            title={tool.name}
                          >
                            <img
                              src={assetPath(tool.image)}
                              alt={tool.name}
                              loading="lazy"
                            />
                          </span>
                        ))}
                      </div>


                    </div>


                    <ProjectCarousel
                      project={project}
                    />

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />

        <div className="container">

          {/* SECTION LABEL */}
          <Reveal>
            <div className="section-label contact-label">
              <span>04</span>
              <div />
              <span>LET'S CONNECT</span>
            </div>
          </Reveal>

          {/* TWO-COLUMN CONTACT */}
          <div className="contact-main">

            {/* LEFT: HEADING */}
            <Reveal direction="left">
              <div className="contact-heading">
                <p className="contact-kicker">
                  HAVE A PROJECT IN MIND?
                </p>

                <h2>
                  Let's create
                  <br />
                  something
                  <br />
                  <span>meaningful.</span>
                </h2>
              </div>
            </Reveal>

            {/* RIGHT: CONTACT LINKS */}
            <Reveal direction="right" delay={150}>
              <div className="contact-links">

                <a
                  href="mailto:kerlenninamae@gmail.com"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <FaEnvelope />
                  </span>
                  <div>
                    <span className="contact-link-label">EMAIL</span>
                    <span className="contact-link-value">
                      kerlenninamae@gmail.com
                    </span>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>

                <a
                  href="https://wa.me/62895323484455"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <FaWhatsapp />
                  </span>
                  <div>
                    <span className="contact-link-label">WHATSAPP</span>
                    <span className="contact-link-value">
                      +62 895-3234-84455
                    </span>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>

                <a
                  href="https://www.instagram.com/kerlen.nina"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <FaInstagram />
                  </span>
                  <div>
                    <span className="contact-link-label">INSTAGRAM</span>
                    <span className="contact-link-value">
                      @kerlen.nina
                    </span>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kerlennina/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <FaLinkedinIn />
                  </span>
                  <div>
                    <span className="contact-link-label">LINKEDIN</span>
                    <span className="contact-link-value">
                      kerlennina
                    </span>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>

                <a
                  href="https://github.com/kerlenn"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <FaGithub />
                  </span>
                  <div>
                    <span className="contact-link-label">GITHUB</span>
                    <span className="contact-link-value">
                      kerlenn
                    </span>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>

              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}