// components/ProjectDetailModal.js
"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";

export default function ProjectDetailModal({ project, onClose }) {
  console.log("Modal project:", project);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, activeImage, onClose]);

  if (!project) return null;

  const details = project.details ?? {};
  const gallery = details.gallery ?? [];

  return (
    <>
      <div
        className="project-detail-backdrop"
        onClick={onClose}
      >
        <div
          className="project-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="project-detail-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>

          <div className="project-detail-header">
            <span className="project-detail-label">
              PROJECT DETAILS
            </span>

            <h2>{project.title}</h2>

            <p>
              {details.overview ||
                project.description ||
                "Project details will be added soon."}
            </p>
          </div>

          {details.features?.length > 0 && (
            <section className="project-detail-section">
              <h3>Key Features</h3>

              <ul className="project-detail-features">
                {details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {details.technologies?.length > 0 && (
            <section className="project-detail-section">
              <h3>Technologies Used</h3>

              <div className="project-detail-tags">
                {details.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>
          )}

          {gallery.length > 0 && (
            <section className="project-detail-section">
              <h3>Application Preview</h3>

              <div className="project-detail-gallery">
                {gallery.map((image, index) => (
                  <article
                    className="project-detail-gallery-item"
                    key={`${image.src}-${index}`}
                  >
                    <button
                      type="button"
                      className="project-detail-image-button"
                      onClick={() => setActiveImage(image)}
                    >
                      <img
                        src={assetPath(image.src)}
                        alt={image.title || `Screenshot ${index + 1}`}
                      />
                      <span>↗ View image</span>
                    </button>

                    <h4>
                      {image.title || `Screenshot ${index + 1}`}
                    </h4>

                    {image.description && (
                      <p>{image.description}</p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="project-detail-actions">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="project-detail-link project-detail-link-primary"
              >
                {project.website.includes("github.com")
                  ? "View on GitHub ↗"
                  : project.website.includes("figma.com")
                    ? "View on Figma ↗"
                    : "Visit Website ↗"}
              </a>
            )}

            {details.github && (
              <a
                href={details.github}
                target="_blank"
                rel="noreferrer"
                className="project-detail-link"
              >
                GitHub Repository ↗
              </a>
            )}

            {details.demo && (
              <a
                href={details.demo}
                target="_blank"
                rel="noreferrer"
                className="project-detail-link"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title || "Screenshot preview"}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="image-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={assetPath(activeImage.src)}
              alt={activeImage.title || "Project screenshot"}
            />
            <p>{activeImage.title}</p>
          </div>

          <span className="image-lightbox-hint">
            CLICK OUTSIDE OR PRESS ESC TO CLOSE
          </span>
        </div>
      )}
    </>
  );
}