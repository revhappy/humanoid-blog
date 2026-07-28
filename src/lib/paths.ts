/** Prefix site paths with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path = ''): string {
  let base = import.meta.env.BASE_URL || '/';
  // Astro may set BASE_URL to `/humanoid-blog` without a trailing slash — normalize.
  if (!base.endsWith('/')) base = `${base}/`;
  if (!path || path === '/') return base;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}
