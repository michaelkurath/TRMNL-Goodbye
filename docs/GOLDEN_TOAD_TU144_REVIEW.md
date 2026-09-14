# Golden Toad and Tu-144 review

Reviewed 2026-09-11 for exhibits 027 and 028.

## Editorial review

- Golden Toad: fact and text review approved. The 1989 endpoint is explicitly a last sighting, and the explanation presents extreme dry weather and chytrid disease as leading explanations rather than a proven single cause. Primary catalogue source: [AmphibiaWeb](https://amphibiaweb.org/species/253).
- Tu-144 passenger service: fact and text review approved. The candidate's incorrect claim that it reached passengers before Concorde was removed. The exhibit now describes the seven-month passenger career without treating later cargo, test, or research flights as passenger service. Primary source: [Technik Museum Sinsheim](https://www.technik-museum.de/en/community/museum-stories/25-years-on-the-museum-roof-the-tupolev-tu-144/).

## Artwork review

Artwork was created with OpenAI's built-in image generation in monochrome engraving style, then exported to the production pairs below.

| Exhibit | Wide asset | Standard asset | Review |
| --- | --- | --- | --- |
| Golden Toad | `assets/exhibits/responsive-v2/golden-toad-master-2x1.jpg` | `assets/exhibits/responsive-v2/golden-toad-standard-4x3.jpg` | Complete animal and toes remain inside the standard crop; approved. |
| Tu-144 | `assets/exhibits/responsive-v2/tu-144-passenger-service-master-2x1.jpg` | `assets/exhibits/responsive-v2/tu-144-passenger-service-standard-4x3.jpg` | Complete aircraft, wingtips, nose, tail, engines, and landing gear remain inside the standard crop; approved after one composition correction. |

### Golden Toad prompt

```text
Use case: historical-scene
Asset type: GOODBYE TRMNL e-ink exhibit master, 2:1 landscape
Primary request: Create a biologically grounded monochrome natural-history engraving of the extinct Golden Toad (Incilius periglenes) in its Monteverde cloud-forest breeding habitat.
Scene/backdrop: damp moss, a shallow temporary breeding pool, restrained cloud-forest foliage and mist; outer left and right wings contain background only.
Subject: one complete adult male Golden Toad, small and compact with smooth skin, blunt snout, short limbs and the characteristic uniform bright-orange male coloration translated into pale luminous engraved tonal value against darker foliage. No other animals.
Style/medium: crisp black-ink crosshatching and stippling on warm off-white paper; museum specimen illustration optimized for 1-bit e-ink; accurate rather than fantastical.
Composition/framing: 2:1 wide canvas. Keep the complete toad, every toe and its soft shadow strictly inside the centered 4:3 safe zone—the middle 60% of canvas width—with at least 15% breathing room on every side. The animal should be large enough to read clearly but must not approach the crop boundary.
Lighting/mood: quiet, humid, elegiac natural-history study.
Constraints: no crop of the animal or toes; no extra toads, insects, signs, text, captions, labels, logos, watermark, frame, border, colour, fantasy glow, or decorative objects. No background subject may be mistaken for another animal.
```

### Tu-144 initial prompt

```text
Use case: historical-scene
Asset type: GOODBYE TRMNL e-ink exhibit master, 2:1 landscape
Primary request: Create a historically accurate monochrome museum engraving of a Tupolev Tu-144S supersonic passenger airliner during its 1977–1978 Aeroflot passenger-service era, on final approach.
Scene/backdrop: pale open sky with only faint distant cloud layers; outer left and right wings contain sky only.
Subject: one complete Tu-144S in a three-quarter front-above view, landing configuration. Preserve the long needle nose in its lowered droop position, small retractable moustache canards deployed just behind the cockpit, broad sharply cranked double-delta wing, exactly four turbojet engines grouped as two close paired nacelles beneath the inner wings, one vertical tail, slender fuselage, and extended landing gear. Distinguish it from Concorde.
Style/medium: crisp black-ink crosshatching and stippling on warm off-white paper, technical museum-catalogue engraving optimized for 1-bit e-ink.
Composition/framing: 2:1 wide canvas. Keep the complete aircraft—from nose probe to tail, both wingtips, all four engine nacelles and every wheel—strictly inside the centered 4:3 safe zone, the middle 60% of canvas width, with at least 12% breathing room. Aircraft should be readable but not touch the crop boundary.
Lighting/mood: calm, precise, elegiac engineering portrait.
Constraints: exactly one aircraft; exactly four engines; no cropped wingtip, nose, tail, landing gear, or shadow; no people, airport structures, extra aircraft, logos, insignia, readable lettering, captions, watermark, border, frame, colour, weapons, or modern twin-engine airliner features.
```

The first result placed the right wing outside the crop-safe area and was rejected.

### Tu-144 correction prompt

```text
Use case: precise-object-edit
Input images: Image 1 is the Tu-144 engraving edit target.
Primary request: Edit only the composition scale and placement. Preserve the same historically accurate Tu-144S aircraft, viewing angle, exactly four engines, deployed moustache canards, droop nose, landing gear, monochrome engraving style, pale sky and cloud texture. Make the entire aircraft approximately 28% smaller and center it both horizontally and vertically in the 2:1 canvas.
Composition/framing: every part—from nose probe to tail, both wingtips, every engine and every wheel—must lie strictly inside the middle 58% of canvas width and middle 68% of canvas height, with clear empty sky around it. The outer left and right wings of the canvas must contain sky only.
Constraints: change only scale and placement; do not redesign the aircraft; do not add or remove engines, canards, wheels, windows, clouds, objects, text, logos, markings, captions, borders, frames, watermarks or colour. Do not crop any part. Do not zoom in.
```

## Candidate replacements

- BBC Ceefax — 23/25. The 1974 launch and 2012 analogue-switch-off endpoint are supported by [ITV News](https://www.itv.com/news/2012-10-24/ceefax-switches-off-as-britain-goes-fully-digital).
- The original Penn Station — 23/25. The 1910 opening, 1963 start of demolition, three-year removal, and preservation legacy are supported by the [Museum of the City of New York](https://blog.mcny.org/2012/05/08/penn-station-and-the-rise-of-historic-preservation/).

## Automated verification

`node scripts/validate-data.js`, `node scripts/validate-candidates.js`, `node scripts/test-transform.js`, `trmnlp lint`, `git diff --check`, and all eight OG/X `trmnlp` layout renders must pass before promotion is proposed for merge.

- Golden Toad: all four OG and four X layouts inspected and approved in [TRMNL run 123](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/34647710000).
- Tu-144 passenger service: all four OG and four X layouts inspected and approved in [TRMNL run 124](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/34648009035).
