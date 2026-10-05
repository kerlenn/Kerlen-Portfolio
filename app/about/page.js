const skills = ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "SQL", "JavaScript", "Next.js", "Git"];

export default function About() {
  return (
    <section>
      <h1 className="mb-4"><span className="text-purple">#</span> About</h1>
      <div className="card-dark p-4 mb-4">
        <p className="mb-0">
          Mahasiswa Informatika di Universitas Tarumanagara yang fokus pada machine learning,
          deep learning, software engineering, dan data analysis. Ganti paragraf ini dengan cerita singkatmu.
        </p>
      </div>
      <h3 className="mb-3">Skills</h3>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="badge badge-tool fs-6 px-3 py-2">{s}</span>
        ))}
      </div>
    </section>
  );
}