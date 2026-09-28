# LaserDisc and Google Hangouts review

## Promotion decisions

- **LaserDisc players (046)** — promoted at 22/25. Pioneer's 14 January 2009
  announcement sets an explicit final run of approximately 3,000 players and
  explains that DVD, Blu-ray, and scarce parts ended production.
- **Google Hangouts (047)** — promoted at 20/25. Google's 15 May 2013 I/O post
  records the cross-platform Hangouts service, while its 27 June 2022 migration
  notice says remaining users would move to Chat and Hangouts would become
  unavailable in November 2022.

Together the promotions leave the live catalogue balanced at ten Internet and
Everyday-life entries and nine Technology, Transport, and Nature entries.

## Sources checked

- LaserDisc production endpoint: <https://global.pioneer/en/corp/news/press/index/1380/>
- Pioneer corporate chronology: <https://global.pioneer/en/corp/info/history/chronology/archives/2008/>
- Hangouts 2013 cross-platform introduction: <https://blog.google/products-and-platforms/platforms/android/live-from-google-io-mo-screens-mo/>
- Hangouts migration and endpoint: <https://blog.google/products-and-platforms/products/workspace/hangouts-to-chat/>

## New candidates

- **Segway PT — 23/25:** recognition 5, visual strength 5, story strength 4,
  endpoint clarity 5, catalogue fit 4. Associated Press reporting records the
  final production date as 15 July 2020; the note distinguishes the original
  transporter from the continuing Segway brand.
- **Christmas Island pipistrelle — 22/25:** recognition 2, visual strength 5,
  story strength 5, endpoint clarity 5, catalogue fit 5. Australia's State of
  the Environment records the final echolocation call in August 2009 and the
  formal extinction listing in 2021.

## Visual review

The first LaserDisc composition and three Hangouts compositions were rejected
because meaningful objects crossed the centred 4:3 crop. The approved
LaserDisc derivative preserves the complete player, open tray, two discs,
remote, sleeve, and CRT. The approved Hangouts derivative preserves the full
laptop, phone, webcam, and connecting cable. Both remain readable without
logos or text.

## CI and render evidence

- The LaserDisc fixture passed validation, Saved State tests, `trmnlp lint`,
  and all 12 OG, TRMNL X landscape, and X portrait renders in
  [run 36387036299](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36387036299),
  artifact `goodbye-render-previews` 10954803182. The complete tray, player,
  discs, sleeve, remote, and CRT remain intact from full through quadrant.
- The Google Hangouts fixture passed the same gate and all 12 layouts in
  [run 36387406015](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36387406015),
  artifact `goodbye-render-previews` 10954947924. The laptop, phone, webcam,
  cable, title, and intended compact copy remain clear across both device
  generations and orientations.

The targeted commits temporarily used branch polling and image URLs so Actions
could retrieve unmerged assets. The final commit restores the full 47-entry
catalogue, permanent `main` asset URLs, and the production polling URL.
