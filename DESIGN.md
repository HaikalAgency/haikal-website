# Haikal — design direction

The portfolio is an independent studio presentation: editorial, tactile, and deliberate. The work leads the story, supported by clear positioning and direct contact.

## Reference study

- [BASIC/DEPT](https://www.basicagency.com/): confident scale, a work-led narrative, concise project descriptions.
- [Instrument](https://www.instrument.com/): clear agency positioning and a close relationship between design, technology, and the portfolio.
- [Studiogusto](https://www.studiogusto.com/): expressive project presentation and a boutique studio sensibility.

These inform the hierarchy and pacing; the typography, ribbon sculpture, compositions, and visual system are original to Haikal.

## System

- Near-black `#111014`, charcoal `#19171d`, warm white `#f1eeeb`, muted violet `#b79ae9`.
- Violet concentrates in the hero artwork, primary actions, and the contact chapter. Quiet surfaces let project imagery carry its own color.
- Manrope display typography with DM Sans body text. Large, tightly spaced headings; restrained labels; readable supporting copy.
- A split hero, staggered project gallery, service index, studio print, process columns, film selector, and a full-width contact chapter create varied page rhythms.
- Existing project content, all eight case studies, three local videos, and the contact API are retained. Placeholder social links and phone details are omitted. Localhost demo URLs are not exposed as public links.

## Components and motion

- Radix / shadcn Dialog, Accordion, Tabs, and Select provide focus management and keyboard interactions.
- GSAP with the official React hook and ScrollTrigger provides clipped headline reveals, ribbon entrance, gentle floating, pointer response, scroll movement, and section reveals.
- The ribbon is a local, depth-sorted SVG surface, with no external 3D scene or texture dependency.
- Motion is scoped and cleaned up on unmount, respects reduced motion, and pauses the floating animation when the hero leaves the viewport.
- Layout adapts through desktop, tablet, and phone. On touch screens the hero becomes a vertical composition and project links keep a visible arrow.
