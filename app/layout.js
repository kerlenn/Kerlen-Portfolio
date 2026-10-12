// app/layout.js
// app/layout.js

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import StarField from "@/components/StarField";

export const metadata = {
  title: "Kerlen | Portfolio",
  description: "Informatics student — ML, DL, Software Engineering, Data Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-bs-theme="dark">
      <body>
        <StarField />

        <div className="site-content">
          <SiteNavbar />

          <main>{children}</main>

          <footer
            className="text-center text-secondary py-4 border-top"
            style={{ borderColor: "rgba(139,92,246,.25)" }}
          >
            © {new Date().getFullYear()} Kerlen Nina Mae. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
