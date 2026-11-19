# tylermitic.com

My personal website. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Editing

| What | Where |
| --- | --- |
| Name, intro, about, projects, contact links | `src/site.ts` |
| Blog posts | `src/content/posts/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Page layouts | `src/pages/`, `src/layouts/`, `src/components/` |

To add a post, create `src/content/posts/my-post.md`:

```md
---
title: My post
description: One line about it.
date: 2026-11-19
draft: true   # optional: hides it from the live site
---

Write here.
```

It shows up at `/writing/my-post/`, on the home page, and in the RSS feed.

## Running locally

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # outputs the static site to dist/
npm run preview   # serves dist/ locally
```

## Deploying

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup:

1. **GitHub → repo Settings → Pages → Source:** choose **GitHub Actions**.
2. **Custom domain:** `public/CNAME` already contains `tylermitic.com`. In Settings → Pages, enter `tylermitic.com` as the custom domain and tick **Enforce HTTPS** once the certificate is issued.
3. **DNS at your registrar:**
   - `A` records for `tylermitic.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records (optional) → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`

Check GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for the current IP addresses before you set DNS.
