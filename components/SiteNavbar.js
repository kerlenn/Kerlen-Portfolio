"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const links = [["home", "Home"], ["about", "About"], ["projects", "Projects"], ["contact", "Contact"]];

export default function SiteNavbar() {
  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="progress-bar-top" style={{ width: `${progress}%` }} />
      <Navbar expand="md" sticky="top" className="site-nav" expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand href="#home" className="brand">&lt;kerlen /&gt;</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              {links.map(([id, label]) => (
                <Nav.Link key={id} href={`#${id}`} active={active === id} onClick={() => setExpanded(false)}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}