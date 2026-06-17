---
"@qeetrix/ui": minor
---

Add **Carousel** — an accessible slider built on Embla (`embla-carousel-react`). Compose `Carousel` with `CarouselContent`, `CarouselItem`, and `CarouselPrevious` / `CarouselNext`; arrow keys move between slides and the region is announced as a carousel. Supports horizontal/vertical `orientation`, Embla `opts` (loop, align, multi-per-view via `basis-*`), a `setApi` escape hatch for dots/progress, and autoplay via `plugins={[Autoplay()]}`. `useCarousel` and the `CarouselApi` type are exported.

Adds dependency: `embla-carousel-react`. No breaking changes.
