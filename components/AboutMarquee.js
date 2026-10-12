// components/AboutMarquee.js

import { assetPath } from "@/lib/assetPath";

const photos = [
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.jpg",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.png",
  "13.jpeg",
  "14.JPG",
  "15.JPG",
  "16.JPG",
  "17.JPG",
  "18.jpg",
  "19.jpg",
  "20.jpeg",
].map((filename) => ({
  src: assetPath(`/images/about/${filename}`),
}));

function MarqueeRow({ items, offset = 0, reverse = false }) {
  const loop = [...items, ...items];

  return (
    <div className="about-marquee-viewport">
      <div className={`about-marquee-track${reverse ? " reverse" : ""}`}>
        {loop.map((photo, index) => {
          const number = offset + (index % items.length) + 1;

          return (
            <figure
              className="about-marquee-item"
              key={`${photo.src}-${index}`}
              aria-hidden={index >= items.length}
            >
              <div className="about-marquee-image">
                <img
                  src={photo.src}
                  alt={`Behind the scenes ${number}`}
                  loading="lazy"
                />
              </div>

              {photo.label && <figcaption>{photo.label}</figcaption>}
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutMarquee() {
  const rowTop = photos.slice(0, 10);
  const rowBottom = photos.slice(10);

  return (
    <div className="about-marquee">
      <div className="about-marquee-heading">
        <span>A GLIMPSE INTO MY WORLD</span>
        <span>BEHIND THE SCENES ✦</span>
      </div>

      <div className="about-marquee-rows">
        <MarqueeRow items={rowTop} />
        <MarqueeRow items={rowBottom} offset={rowTop.length} reverse />
      </div>
    </div>
  );
}
