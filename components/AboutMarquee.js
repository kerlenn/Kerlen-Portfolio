
const basePath = "/Kerlen-Portfolio";

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
  src: `${basePath}/images/about/${filename}`,
}));

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
                <img
                  src={photo.src}
                  alt={`Behind the scenes ${((index % photos.length) + 1)}`}
                  loading="lazy"
                />
                <span className="about-marquee-number">
                  {String((index % photos.length) + 1).padStart(2, "0")}
                </span>
              </div>

              {photo.label && <figcaption>{photo.label}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
