const contacts = [
  ["Email", "you@email.com", "mailto:you@email.com"],
  ["GitHub", "github.com/username", "https://github.com/username"],
  ["LinkedIn", "linkedin.com/in/username", "https://linkedin.com/in/username"],
];

export default function Contact() {
  return (
    <section>
      <h1 className="mb-4"><span className="text-purple">#</span> Contact</h1>
      <div className="row g-4">
        {contacts.map(([name, text, href]) => (
          <div className="col-md-4" key={name}>
            <a href={href} target="_blank" rel="noreferrer" className="card-dark p-4 d-block text-decoration-none h-100">
              <small className="text-purple mono">{name}</small>
              <p className="mb-0 text-light">{text}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}