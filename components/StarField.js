export default function StarField() {
  const stars = Array.from({ length: 55 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 61) % 100}%`,
    size: `${1 + (i % 3) * 0.7}px`,
    delay: `${-(i % 8) * 0.8}s`,
    duration: `${4 + (i % 5)}s`,
  }));

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            "--star-left": star.left,
            "--star-top": star.top,
            "--star-size": star.size,
            "--star-delay": star.delay,
            "--star-duration": star.duration,
          }}
        />
      ))}
    </div>
  );
}