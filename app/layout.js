// app/layout.js

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import StarField from "@/components/StarField";
import AdventureScene from "@/components/AdventureScene";

export const metadata = {
  title: "Kerlen | Portfolio",
  description: "Informatics student — Machine Learning, Software Engineering, Data Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-bs-theme="light">
      <body>
        <StarField />
        <AdventureScene />

        <div className="site-content">
          <SiteNavbar />

          <main>{children}</main>

          <footer
            className="text-center py-4"
            style={{
              background: "#1d2b4f",
              color: "rgba(255,255,255,.75)",
              borderTop: "3px solid #1d2b4f",
              fontWeight: 600,
            }}
          >
            © {new Date().getFullYear()} Kerlen Nina Mae. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}