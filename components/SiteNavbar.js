"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container } from "react-bootstrap";

const links = [["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/contact", "Contact"]];
const clean = (p) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export default function SiteNavbar() {
  const path = clean(usePathname());
  return (
    <Navbar expand="md" sticky="top" className="site-nav">
      <Container>
        <Navbar.Brand as={Link} href="/" className="brand">&lt;kerlen /&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            {links.map(([href, label]) => (
              <Nav.Link as={Link} key={href} href={href} active={path === href}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}