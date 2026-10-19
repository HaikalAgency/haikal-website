# Haikal — Independent Digital Studio

A React portfolio with an editorial violet and charcoal design, an original animated ribbon sculpture, eight project case studies, and a motion portfolio.

## Development

```sh
npm install
npm run dev
```

The contact form uses the existing `/api/contact` endpoint. For local email delivery, configure the variables documented in `.env.example` and run `npm run dev:server` in a second terminal. Vite proxies API requests to port 3001.

## Verification

```sh
npm test
npm run build
```

Interaction tests cover the FAQ, project filters, case-study routes, form validation, and contact API success and failure states. Email delivery is not exercised by the tests.

## Design and implementation

See [DESIGN.md](./DESIGN.md) for the reference study, palette, layout direction, and motion decisions. The UI uses Radix / shadcn primitives, Lucide icons, GSAP, its official React integration, and ScrollTrigger. Reduced-motion settings are respected.

Original design source: [Figma portfolio](https://www.figma.com/design/kb8P37rKjlYggH6YVCFUBY/protfolio).
