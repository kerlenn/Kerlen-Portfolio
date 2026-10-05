import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section>
      <h1 className="mb-4"><span className="text-purple">#</span> Projects</h1>
      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-md-6" key={p.title}>
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
          </div>
        ))}
      </div>
    </section>
  );
}