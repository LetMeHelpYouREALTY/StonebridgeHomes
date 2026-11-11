# Site imagery

Source masters live in `assets/photos/` (1920px JPEG). `npm run images`
(`scripts/generate-images.mjs`) turns each one into `public/images/<name>.webp`,
`<name>.jpg`, `<name>-960.webp`, `<name>-960.jpg`, composites the Open Graph
card over the homepage hero, and renders the logo, favicons, and PWA icons.
To replace a photo, drop a new JPEG over the same filename in `assets/photos`
and re-run the script.

All photos were AI-generated (Gamma, 2026-11-03 and 2026-11-07) as
illustrative imagery of the Summerlin West setting. They are not photographs of
specific Stonebridge homes and must never be attached to a specific listing.
Real geo-tagged photos of the clubhouse at 930 Silverfir Ct, Stonebridge Park,
and Crossbridge Road will outperform them; swap them in by filename.

| File | Subject | Used on |
|---|---|---|
| `home-exterior-golden-hour` | Single-story home, Red Rock behind | Home hero, OG card |
| `home-front-sunrise` | Front of a single-story home at sunrise | Homes for Sale, FAQ, Home Value heroes |
| `village-aerial-dusk` | Aerial of the village with park | Home figure, Neighborhoods, Stonebridge Las Vegas hero |
| `neighborhood-street` | Residential street | Home, Neighborhoods hero, Living Here |
| `valley-lights-blue-hour` | Elevated street over valley lights | Prices hero, Homes for Sale |
| `two-story-contemporary` | Two-story home, courtyard entry | Prices, Floor Plans, Contact hero |
| `floor-plan-rendering` | Top-down furnished floor plan | Floor Plans hero, Home card |
| `great-room-interior`, `open-kitchen-island`, `primary-suite` | Interiors | Floor Plans strip |
| `covered-patio-sunset` | Covered patio facing Red Rock | Floor Plans, Home Value, Living Here |
| `clubhouse-pool` | Resort pool and lap pool | Heritage hero, Home card |
| `pickleball-bocce-courts`, `firepit-terrace-night`, `staffed-gatehouse` | Clubhouse and gate | Heritage strip, Neighborhoods |
| `park-fields-courts` | Fields, playground, courts | Stonebridge Park hero, Home card, Living Here |
| `shaded-playground` | Playground under shade sails | Stonebridge Park |
| `red-rock-canyon-trail` | Trail toward the escarpment | Living Here hero, Park, Stonebridge Las Vegas |
| `shopping-promenade` | Open-air retail promenade | Living Here, Stonebridge Las Vegas |
| `luxury-estate-twilight` | Estate with infinity pool, Red Rock behind | Luxury Homes hero |
| `luxury-great-room` | Double-height great room open to pool | Luxury Homes |
| `bhhs-seal-white.png`, `bhhs-seal-cabernet.png` | Berkshire Hathaway HomeServices seal (from the bhhs-seal-logos plugin; masters in `assets/brand`) | Footer, Home agent block |
| `og-stonebridge-las-vegas-homes.png` | OG/Twitter card | Every page |
| `logo.svg`, `logo-light.svg`, `logo.png` | Mark | Header, footer, schema |
