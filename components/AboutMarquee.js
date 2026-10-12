// components/AboutMarquee.js

const photos = [
  {
    src: "/images/about/1.JPG",
  },
  {
    src: "/images/about/2.JPG",
  },
  {
    src: "/images/about/3.JPG",
  },
  {
    src: "/images/about/4.JPG",
  },
  {
    src: "/images/about/5.JPG",
  },
  {
    src: "/images/about/6.JPG",
  },
  {
    src: "/images/about/7.jpg",
  },
  {
    src: "/images/about/8.JPG",
  },
  {
    src: "/images/about/9.JPG",
  },
  {
    src: "/images/about/10.JPG",
  },
  {
    src: "/images/about/11.JPG",
  },
  {
    src: "/images/about/12.png",
  },
  {
    src: "/images/about/13.jpeg",
  },
  {
    src: "/images/about/14.JPG",
  },
  {
    src: "/images/about/15.JPG",
  },
  {
    src: "/images/about/16.JPG",
  },
  {
    src: "/images/about/17.JPG",
  },
  {
    src: "/images/about/18.jpg",
  },
  {
    src: "/images/about/19.jpg",
  },
  {
    src: "/images/about/20.jpeg",
  }
];

export default function AboutMarquee() {
  // Duplikasi foto agar animasi bisa berulang tanpa jeda.
  const loopPhotos = [...photos, ...photos];

  return (
    <div className="about-marquee">
      <div className="about-marquee-heading">
        <span>A GLIMPSE INTO MY WORLD</span>
        <span>BEHIND THE SCENES ✦</span>
      </div>

      <div className="about-marquee-viewport">
        <div className="about-marquee-track">
          {loopPhotos.map((photo, index) => (
            <figure
              className="about-marquee-item"
              key={`${photo.src}-${index}`}
              aria-hidden={index >= photos.length}
            >
              <div className="about-marquee-image">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="about-marquee-number">
                  {String((index % photos.length) + 1).padStart(2, "0")}
                </span>
              </div>

              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}