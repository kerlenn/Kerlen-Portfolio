import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

const skills = ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "SQL", "JavaScript", "Next.js", "Git"];

const contacts = [
  ["Email", "you@email.com", "mailto:you@email.com"],
  ["GitHub", "github.com/username", "https://github.com/username"],
  ["LinkedIn", "linkedin.com/in/username", "https://linkedin.com/in/username"],
];

export default function Page() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="container">
          <p className="mono text-purple mb-2 hero-in d1">
            {"> hello, world"}<span className="cursor">_</span>
          </p>
          <h1 className="display-2 fw-bold hero-in d2">
            Hi, I'm <span className="grad-text">Kerlen</span>
          </h1>
          <p className="fs-4 text-secondary hero-in d3">
            Informatics student · Machine Learning · Deep Learning · Software Engineering · Data Analysis
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4 hero-in d4">
            <a href="#projects" className="btn btn-purple btn-lg">View Projects</a>
            <a href="#contact" className="btn btn-outline-purple btn-lg">Contact Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <Reveal direction="left">
            <h2 className="mb-4"><span className="text-purple">#</span> About</h2>
          </Reveal>
          <Reveal delay={150} direction="zoom">
            <div className="card-dark p-4 mb-5">
              <p className="mb-0">
                Mahasiswa Informatika di Universitas Tarumanagara yang fokus pada machine learning,
                deep learning, software engineering, dan data analysis. Ganti paragraf ini dengan cerita singkatmu.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <h3 className="mb-3">Skills</h3>
          </Reveal>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Reveal key={s} delay={i * 80} direction="zoom">
                <span className="badge badge-tool fs-6 px-3 py-2">{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <Reveal direction="left">
            <h2 className="mb-4"><span className="text-purple">#</span> Projects</h2>
          </Reveal>
          <div className="row g-4">
            {projects.map((p, i) => (
              <div className="col-md-6" key={p.title}>
                <Reveal delay={i * 150} className="h-100">
                  <div className="card-dark p-4 h-100 d-flex flex-column">
                    <h3 className="h4">{p.title}</h3>
                    <p className="text-secondary">{p.desc}</p>
                    <div className="mb-3">
                      <small className="text-purple mono d-block mb-1">Tools</small>
                      <div className="d-flex flex-wrap gap-2">
                        {p.tools.map((t) => <span key={t} className="badge badge-tool">{t}</span>)}
                      </div>
                    </div>
                    <ul className="list-unstyled small mb-4">
                      <li><span className="text-purple mono">Model:</span> {p.model}</li>
                      <li><span className="text-purple mono">Host:</span> {p.host}</li>
                    </ul>
                    <div className="mt-auto d-flex gap-2">
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-purple btn-sm">Live Demo</a>
                      <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-outline-purple btn-sm">Source</a>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <Reveal direction="left">
            <h2 className="mb-4"><span className="text-purple">#</span> Contact</h2>
          </Reveal>
          <div className="row g-4">
            {contacts.map(([name, text, href], i) => (
              <div className="col-md-4" key={name}>
                <Reveal delay={i * 150} direction="right" className="h-100">
                  <a href={href} target="_blank" rel="noreferrer" className="card-dark p-4 d-block text-decoration-none h-100">
                    <small className="text-purple mono">{name}</small>
                    <p className="mb-0 text-light">
                      {text} <span className="contact-arrow text-purple">↗</span>
                    </p>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}