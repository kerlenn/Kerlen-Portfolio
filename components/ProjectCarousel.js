"use client";

import { useState } from "react";

export default function ProjectCarousel({ project }) {
  const [active, setActive] = useState(0);

  const total = project.items.length;

  function next() {
    setActive((current) => (current + 1) % total);
  }

  function prev() {
    setActive((current) => (current - 1 + total) % total);
  }

  function getPosition(index) {
    let diff = index - active;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  }

  return (
    <div className="project-carousel">

      <div className="carousel-stage">

        {project.items.map((item, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`carousel-card ${
                position === 0 ? "active" : ""
              }`}
              style={{
                "--position": position,
              }}
              onClick={() => setActive(index)}
            >

              {item.type === "youtube" ? (
                <div className="carousel-video">
                  <div className="carousel-play">
                    ▶
                  </div>

                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  )}
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                />
              )}

              <div className="carousel-overlay">
                <span>{item.title}</span>
              </div>

            </div>
          );
        })}

      </div>


      {/* CONTROLS */}

      <div className="carousel-controls">

        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="carousel-dots">

          {project.items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Go to project ${index + 1}`}
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
  );
}