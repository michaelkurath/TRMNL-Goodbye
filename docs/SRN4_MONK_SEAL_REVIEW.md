# SR.N4 and Caribbean monk seal review

## Promotion decisions

- **SR.N4 Channel hovercraft (044)** — promoted at 23/25 as the highest-rated
  remaining candidate. A specialist service history dates the final Hoverspeed
  weekend to 1 October 2000; the Hovercraft Museum independently identifies
  Princess Anne as its preserved, sole-surviving Dover–Calais SR.N4.
- **Caribbean monk seal (045)** — promoted at 22/25. NOAA records the final
  confirmed sighting in 1952 and the 2008 extinction delisting. The Federal
  Register review documents intensive exploitation for oil and food and
  describes the species' anatomy used to review the artwork.

## Sources checked

- SR.N4 final service: <https://www.jameshovercraft.co.uk/srn4-last-days>
- Preserved Princess Anne: <https://hovercraft-museum.org/whats-here/>
- Caribbean monk seal endpoint: <https://www.fisheries.noaa.gov/national/endangered-species-conservation/delisting-species-under-endangered-species-act>
- NOAA final rule and species review: <https://www.federalregister.gov/documents/2008/10/28/E8-25704/endangered-and-threatened-species-final-rule-to-remove-the-caribbean-monk-seal-from-the-federal-list>

## New candidates

- **LaserDisc players — 22/25:** recognition 4, visual strength 5, story
  strength 4, endpoint clarity 5, catalogue fit 4. Pioneer announced on
  14 January 2009 that production would cease after approximately 3,000 final
  players because DVD/Blu-ray dominated and parts were difficult to obtain.
- **Google Hangouts — 20/25:** recognition 5, visual strength 3, story strength
  4, endpoint clarity 5, catalogue fit 3. Google announced that Hangouts would
  become unavailable in November 2022 as remaining users moved to Chat.

## Visual review

The first generation of each image was rejected for failing the centered 4:3
safe zone. Corrected masters and their centered derivatives preserve all four
SR.N4 propellers and the full skirt, and the seal's nose, foreflippers, and
hind-flipper tips.

## CI and render evidence

- The complete production-data branch passed validation, Saved State tests,
  `trmnlp lint`, and its 12-view render in
  [run 36301281259](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36301281259).
- The SR.N4 was forced through all four OG, X landscape, and X portrait views
  in [run 36301378568](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36301378568), artifact
  `goodbye-render-previews` 10926015763. Its complete skirt, body, and
  propeller silhouette remained clear at each size; type used only intended
  compact truncation.
- The Caribbean monk seal passed the same 12 targeted views in
  [run 36301490980](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36301490980), artifact
  `goodbye-render-previews` 10925661191. Its nose, foreflippers, body, and hind
  flippers remained intact in all image-bearing crops.

The targeted commits temporarily used branch polling and image URLs so Actions
could retrieve unmerged assets. The final commit restores the full 45-entry
catalogue, permanent `main` asset URLs, and the production polling URL.
