# Segway PT and Christmas Island pipistrelle review

## Promotion decisions

- **Segway PT (048)** — promoted at 23/25. Associated Press reporting records
  15 July 2020 as the end of production for the original Personal Transporter;
  the wider Segway brand continued with other mobility products.
- **Christmas Island pipistrelle (049)** — promoted at 22/25. Australia's
  State of the Environment records the final echolocation call in August 2009
  and the formal extinction listing in 2021. The government's consultation
  record narrows the final nightly detection to 26 August 2009.

The promotions bring Everyday life, Internet, Nature, and Transport to ten
live exhibits each, with Technology at nine.

## Sources checked

- Segway PT production endpoint: <https://abcnews.com/Business/segway-ending-production-iconic-personal-vehicle/story?id=71425788>
- Christmas Island pipistrelle status: <https://soe.dcceew.gov.au/biodiversity/environment/flora-and-fauna>
- Final detection consultation record: <https://www.dcceew.gov.au/sites/default/files/env/consultations/27bdb669-bdd2-4778-b679-652da87c20c1/files/consultation-document-pipistrellus-murrayi.docx>

## New candidates

- **Printed UK Yellow Pages — 23/25:** recognition 5, visual strength 5,
  story strength 4, endpoint clarity 5, catalogue fit 4. Yell records the
  directory's 1966 launch and distribution of the final printed issue in 2019.
- **Microsoft Kinect — 22/25:** recognition 5, visual strength 5, story
  strength 4, endpoint clarity 5, catalogue fit 3. Kinect creator Alex Kipman
  and Xbox devices marketing general manager Matthew Lapsen confirmed in 2017
  that manufacturing had ended after approximately 35 million units.

## Visual review

The first-pass Segway and pipistrelle masters both passed direct 2:1 and centred
4:3 derivative inspection. The complete Segway silhouette, wheels, platform,
shaft, and handlebar remain intact; the bat's full wings, ears, feet, and tail
area remain inside the safe zone without relying on an offset crop.

The first pipistrelle device render exposed an OG quadrant collision between
its 34-character name and the epitaph. The shared responsive name-size rule now
uses the framework's small title below `lg` and base title at `lg` for names
longer than 28 characters; the corrected fixture must pass before merge.

## CI and render evidence

- The Segway fixture passed validation, Saved State tests, `trmnlp lint`, and
  all 12 OG, TRMNL X landscape, and X portrait renders in
  [run 36531019709](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36531019709),
  artifact `goodbye-render-previews` 11016194111. Its handlebar, shaft,
  platform, both wheels, and title remain intact from full through quadrant.
- The initial pipistrelle workflow passed mechanically in run 36531303983, but
  artifact review rejected its OG quadrant because the long name collided with
  the epitaph. After the responsive title rule was corrected, all 12 layouts
  passed visual review in
  [run 36531710655](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36531710655),
  artifact `goodbye-render-previews` 11016850528.

The targeted commits temporarily used branch polling and image URLs so Actions
could retrieve unmerged assets. The final commit restores the full 49-entry
catalogue, permanent `main` asset URLs, and the production polling URL.
