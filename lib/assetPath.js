export function assetPath(path) {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/Kerlen-Portfolio"
      : "";

  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}