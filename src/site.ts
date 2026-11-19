/**
 * Everything you'd want to change about the site's words lives here.
 * Edit this file, save, and the dev server (`npm run dev`) updates instantly.
 *
 * Anything marked TODO is placeholder text waiting for the real thing.
 */

export const SITE = {
  name: 'Tyler Mitic',
  url: 'https://tylermitic.com',

  // Shown in search results and link previews.
  description: 'The personal website of Tyler Mitic.', // TODO: make this yours

  // The big line at the top of the home page. Wrap a word in *asterisks* to italicize it.
  greeting: 'Hi, I’m *Tyler*.',

  // One or two sentences under the greeting.
  // TODO: replace with what you do / what you're about.
  tagline:
    'Welcome to my corner of the internet. This is where I keep track of the things I make, think about, and want to remember.',

  // Paragraphs for the About section. TODO: write your own.
  about: [
    'This is the About section. Use it for a few sentences about who you are: what you do, what you care about, and what you’re working on right now.',
    'Keep it short and in your own voice. Everything here lives in src/site.ts.',
  ],

  // What you're up to right now (optional). Set to '' to hide it.
  now: 'Building this website.', // TODO

  // Projects shown on the home page. Add, remove, or reorder freely.
  // `href` is optional; leave it out if there's nothing to link to yet.
  projects: [
    {
      name: 'tylermitic.com',
      year: '2026',
      description: 'This site. Built with Astro, hosted on GitHub Pages.',
      href: 'https://tylermitic.com',
    },
    {
      name: 'Project two', // TODO
      year: '2025',
      description: 'A one-line description of something you made and why it matters.',
    },
    {
      name: 'Project three', // TODO
      year: '2024',
      description: 'Another thing worth showing off. Replace or delete these placeholders.',
    },
  ] as Project[],

  // Contact + links. Entries with an empty `href` are hidden automatically.
  email: 'tyler@tylermitic.com', // TODO: confirm this is the address you want public
  links: [
    { label: 'GitHub', href: '' }, // TODO: e.g. https://github.com/your-username
    { label: 'LinkedIn', href: '' }, // TODO: e.g. https://www.linkedin.com/in/your-handle
    { label: 'Bluesky', href: '' }, // TODO
  ] as Link[],
};

export type Project = {
  name: string;
  year?: string;
  description: string;
  href?: string;
};

export type Link = { label: string; href: string };
