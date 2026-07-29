/**
 * Site-wide config. Replace placeholder emails before launch marketing.
 * Forms and footers import from here — one place to update.
 */
export const siteConfig = {
  name: 'Mechafeed',
  legalName: 'Mechafeed',
  tagline: 'Humanoid robotics news, AI breakthroughs, and intelligent machines.',
  description:
    'Your source for humanoid robotics news, AI breakthroughs, and the future of intelligent machines. Covering the companies and technologies shaping tomorrow.',

  /**
   * Public site origin + base path (must match astro.config site + base).
   * Used for absolute share/RSS links when Astro.site alone is not enough.
   */
  origin: 'https://mechafeed.com',
  basePath: '/',

  /** Contact / forms (FormSubmit). All routes use the same inbox for now. */
  emails: {
    contact: 'mechafeed@gmail.com',
    newsletter: 'mechafeed@gmail.com',
    advertise: 'mechafeed@gmail.com',
  },

  /**
   * Social profile URLs. Leave empty string to hide the icon.
   * Brand: @mechafeed — primary X account for the site.
   */
  social: {
    x: 'https://x.com/mechafeed',
    youtube: '',
    linkedin: '',
  },

  /** X persona for organic growth (blog byline, not a bot). */
  xPersona: {
    displayName: 'Robb Harlan',
    playbook: 'social/ROBB-ON-X.md',
    organicQueue: 'social/robb-organic-queue.md',
  },

  newsletter: {
    name: 'The Weekly Circuit',
    blurb: 'Get the top humanoid robotics stories delivered every Saturday. No spam, unsubscribe anytime.',
  },
} as const;

/** Absolute URL for a path under the site base (e.g. 'blog/slug' or 'rss.xml'). */
export function absoluteUrl(path = ''): string {
  const base = siteConfig.basePath.endsWith('/') ? siteConfig.basePath : `${siteConfig.basePath}/`;
  if (!path || path === '/') {
    return new URL(base, siteConfig.origin).href;
  }
  const clean = path.replace(/^\//, '');
  return new URL(`${base}${clean}`, siteConfig.origin).href;
}

/** FormSubmit endpoint for a given inbox (activate once with a real email). */
export function formSubmitAction(email: string): string {
  return `https://formsubmit.co/${encodeURIComponent(email)}`;
}
