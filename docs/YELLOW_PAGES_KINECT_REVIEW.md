# Printed UK Yellow Pages and Microsoft Kinect review

## Promotion decisions

- **Printed UK Yellow Pages (050)** — promoted at 23/25. Yell's first-party
  history states that the directory launched in 1966 and the final printed
  issue was distributed in 2019. Its physical form and digital replacement
  provide a clear Everyday life story.
- **Microsoft Kinect (051)** — promoted at 22/25. Fast Company's 25 October
  2017 report records the manufacturing shutdown and approximately 35 million
  units sold, based on direct interviews with Kinect creator Alex Kipman and
  Xbox devices marketing general manager Matthew Lapsen.

The promotions bring Technology to ten live exhibits and the complete live
catalogue to 51 entries.

## Sources checked

- Printed Yellow Pages history: <https://business.yell.com/yellow-pages/>
- Kinect manufacturing endpoint: <https://www.fastcompany.com/90147868/exclusive-microsoft-has-stopped-manufacturing-the-kinect>

## New candidates

- **Woolworths UK stores — 23/25:** recognition 5, visual strength 5, story
  strength 5, endpoint clarity 5, catalogue fit 3. RTÉ recorded that the last
  200 of the chain's 807 UK shops were to close on 6 January 2009.
- **Xerces blue butterfly — 22/25:** recognition 3, visual strength 5, story
  strength 5, endpoint clarity 4, catalogue fit 5. The California Academy of
  Sciences identifies its human-driven extinction through dune-habitat loss
  and disappearance from San Francisco in 1943; the date remains marked as a
  final-observation endpoint.

Candidate sources:

- <https://www.rte.ie/news/2009/0103/112254-woolworths/>
- <https://www.calacademy.org/press/releases/california-academy-of-sciences-and-presidio-trust-repopulate-sand-dunes-with-relative>

## Visual review

The first-pass Yellow Pages and Kinect masters both passed direct 2:1 and
centred 4:3 derivative inspection. The complete open directory and corded
telephone remain visible in both Yellow Pages crops. Kinect's sensor bar,
pedestal, three apertures, television, and console remain legible in both
crops. Neither derivative relies on an offset crop, and neither artwork
contains branding or a caption.

## CI and render evidence

- The Yellow Pages fixture passed validation, Saved State tests, `trmnlp lint`,
  and all 12 OG, TRMNL X landscape, and X portrait renders in
  [run 36678916571](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36678916571),
  artifact `goodbye-render-previews` 11081166207. The title wraps cleanly and
  the directory and telephone remain legible in every view.
- Kinect's first mechanical pass in run 36679432167 was rejected during visual
  review because the rationale was ellipsized in X portrait half-horizontal.
  The rationale was shortened without changing its meaning. The corrected
  fixture passed all validation and all 12 rendered views in
  [run 36679774076](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36679774076),
  artifact `goodbye-render-previews` 11081780965.

The targeted commits temporarily used branch polling and image URLs so Actions
could retrieve unmerged assets. The final commit restores the complete 51-entry
catalogue, permanent `main` asset URLs, and the production polling URL.
