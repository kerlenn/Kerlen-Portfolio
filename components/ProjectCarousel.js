// components/ProjectCarousel.js

"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assetPath";

export default function ProjectCarousel({ project }) {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  const dragStart = useRef(null);

  const items = project.items ?? [];
  const total = items.length;

  useEffect(() => {
    if (!preview) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setPreview(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [preview]);

  if (total === 0) {
    return (
      <div className="carousel-empty">
        Karya akan segera ditambahkan.
      </div>
    );
  }

  function next() {
    setActive((current) => (current + 1) % total);
  }

  function prev() {
    setActive((current) => (current - 1 + total) % total);
  }

  function getPosition(index) {
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  }

  function handlePointerDown(event) {
    dragStart.current = event.clientX;
  }

  function handlePointerUp(event) {
    if (dragStart.current === null) return;

    const distance = event.clientX - dragStart.current;
    dragStart.current = null;

    if (Math.abs(distance) < 45) return;

    if (distance < 0) next();
    else prev();
  }

  function handlePointerCancel() {
    dragStart.current = null;
  }

  const getImagePath = assetPath;

  return (
    <>
      <div className="project-carousel">
        <div
          className="carousel-stage"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {items.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const media = item.image || item.thumbnail;
            const mediaSrc = getImagePath(media);

            return (
              <article
                key={`${project.id}-${item.title}-${index}`}
                className={`carousel-card ${isActive ? "active" : ""}`}
                style={{ "--position": position }}
                onClick={() => setActive(index)}
                aria-label={`${item.title}, karya ${index + 1}`}
              >
                {media ? (
                  <img
                    src={mediaSrc}
                    alt={item.title}
                    draggable="false"
                    loading="lazy"
                    onClick={(event) => {
                      event.stopPropagation();
                      setPreview({
                        src: mediaSrc,
                        title: item.title,
                      });
                    }}
                    onLoad={(event) => {
                      const img = event.currentTarget;
                      const card = img.closest(".carousel-card");

                      if (card) {
                         card.style.setProperty(
                           "--image-ratio",
                           `${img.naturalWidth} / ${img.naturalHeight}`
                         );
                        card.style.setProperty("--r", img.naturalWidth / img.naturalHeight);
                       }
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.add(
                        "visible"
                      );
                    }}
                  />
                ) : null}

                <div
                  className={`carousel-placeholder ${media ? "" : "visible"}`}
                >
                  <span>{project.category}</span>
                  <strong>{item.title}</strong>
                  <small>Preview coming soon</small>
                </div>

                {item.type === "youtube" && (
                  <span className="carousel-media-badge">▶ VIDEO</span>
                )}

                {item.website && (
                  <span className="carousel-media-badge">↗ WEBSITE</span>
                )}

                <div className="carousel-overlay">
                  <span>{item.title}</span>

                  {isActive && item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="carousel-open-link"
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Open website ↗
                    </a>
                  )}

                  {isActive && item.type === "youtube" && item.youtube && (
                    <a
                      href={item.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="carousel-open-link"
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Watch video ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="carousel-dots">
            {items.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Go to ${item.title}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      {preview && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview gambar: ${preview.title}`}
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setPreview(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="image-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={preview.src} alt={preview.title} />
            <p>{preview.title}</p>
          </div>

          <span className="image-lightbox-hint">
            CLICK OUTSIDE OR PRESS ESC TO CLOSE
          </span>
        </div>
      )}
    </>
  );
}