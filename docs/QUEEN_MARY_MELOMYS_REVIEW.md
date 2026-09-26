# Queen Mary and Bramble Cay melomys review

## Promotion decisions

- **RMS Queen Mary passenger service (042)** — selected as a 21/25 candidate
  that adds a major maritime story to the joint-lowest live category. The
  official Queen Mary timeline records the final eastbound Atlantic crossing
  as Voyage 513 in September 1967; Royal Museums Greenwich independently
  records the 1967 sale and final voyage to Long Beach.
- **Bramble Cay melomys (043)** — selected as a 20/25 candidate that adds a
  recent, well-documented mammal extinction to the joint-lowest live category.
  The Australian Museum records the 2009 last sighting, 2019 Australian
  declaration, severe vegetation loss, and the still-unproven possibility of
  a Papua New Guinea population.

## Sources checked

- Queen Mary: <https://www.queenmary.com/timeline-stats--fun-facts.htm>
- Royal Museums Greenwich: <https://www.rmg.co.uk/collections/library/rmgl-154899>
- Australian Museum: <https://australian.museum/learn/australia-over-time/extinct-animals/melomys-rubicola/>
- Australian Parliament: <https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Environment_and_Communications/Faunalextinction/Interim%20report/c02>

## New candidates

- **SR.N4 Channel hovercraft — 23/25:** recognition 4, visual strength 5,
  story strength 5, endpoint clarity 5, catalogue fit 4. James Hovercraft's
  specialist history dates the final Hoverspeed services to 1 October 2000.
- **Caribbean monk seal — 22/25:** recognition 3, visual strength 5, story
  strength 5, endpoint clarity 4, catalogue fit 5. NOAA records the last known
  sighting in 1952 and its 2008 delisting and extinction finding.

## Visual review

The source masters and centered derivatives were checked for historical or
biological identifiers, grayscale readability, and complete safe-zone crops.
The first melomys generation was rejected because its tail crossed the crop;
the corrected version keeps every identifying part inside both assets.

## CI and render evidence

- Production-data validation, Saved State tests, `trmnlp lint`, and the 12-view
  render workflow passed in [run 36224813510](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36224813510).
- Queen Mary was forced through all four OG, X landscape, and X portrait views
  in [run 36225104588](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36225104588), artifact
  `goodbye-render-previews` 10900970160. The complete three-funnel silhouette,
  title, epitaph, metadata, and long-form copy remained readable or used the
  templates' intended compact truncation.
- The Bramble Cay melomys was forced through the same 12 views in
  [run 36225267239](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36225267239), artifact
  `goodbye-render-previews` 10900935466. The nose, feet, and tail tip remained
  present in all image-bearing crops; type and spacing passed at each size.

The forced commits temporarily used branch polling and image URLs so GitHub
Actions could retrieve unmerged assets. The final commit restores the complete
43-entry feed, permanent `main` asset URLs, and the production polling URL.
