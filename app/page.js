import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="mono text-purple mb-2">{"> hello, world_"}</p>
        <h1 className="display-3 fw-bold glow">Hi, I'm Kerlen</h1>
        <p className="fs-4 text-secondary">
          Informatics student · Machine Learning · Deep Learning · Software Engineering · Data Analysis
        </p>
        <div className="d-flex gap-3 mt-4">
          <Link href="/projects" className="btn btn-purple btn-lg">View Projects</Link>
          <Link href="/contact" className="btn btn-outline-purple btn-lg">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}