# kemwa.dev

Source for [kemwa.dev](https://kemwa.dev), Keith Warner's technical portfolio. Built with [Astro](https://astro.build) and deployed on Cloudflare.

## Edit content

Almost everything lives in [`src/data/site.ts`](src/data/site.ts): projects, the `now.log` entries, the stack and contact links. Add a project by appending to `projects`; the card, the `ls projects/` line and anchors update automatically.

To add a résumé, drop `resume.pdf` into `public/` and set `contact.resume = '/resume.pdf'`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Cloudflare builds every push to `main` and creates a preview URL for every pull request.

- Build command: `npm run build`
- Output directory: `dist`
