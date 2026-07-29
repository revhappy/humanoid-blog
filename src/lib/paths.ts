/** Prefix site paths with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path = ''): string {
  let base = import.meta.env.BASE_URL || '/';
  // Astro may set BASE_URL without a trailing slash — normalize.
  if (!base.endsWith('/')) base = `${base}/`;
  if (!path || path === '/') return base;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

/** Resolve hero/card images: absolute http(s) stay as-is; local paths get base prefix. */
export function resolveImage(src?: string, fallback = 'images/placeholder.svg'): string {
  if (!src) return withBase(fallback);
  if (/^https?:\/\//i.test(src)) return src;
  return withBase(src.replace(/^\//, ''));
}
