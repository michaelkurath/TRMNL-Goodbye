# AOL dial-up and Huia review

Reviewed 2026-09-25 for exhibits 040 and 041.

## Selection

AOL dial-up was the highest-rated remaining candidate at 24/25. Huia was
selected from the 21/25 group because Nature was the smallest live category
(six entries before this promotion) and because the male/female bill dimorphism
supports a distinctive monochrome exhibit. Ratings are editorial priorities,
not measures of factual certainty.

## Fact and text review

### AOL dial-up internet

- [Associated Press, 1 October 2025](https://apnews.com/article/08162912737f2fb221f10ba87ce5fc41)
  confirms that AOL ended dial-up on 30 September 2025 and reports the company
  notice covering the dial-up service, AOL Dialer, and AOL Shield Browser.
- [The Verge, 9 August 2025](https://www.theverge.com/news/757194/aol-dial-up-is-dead)
  independently reports the 30 September endpoint and the associated software.

The 1991 start and 2025 endpoint describe AOL-branded dial-up, not dial-up as a
technology everywhere. Broadband, fibre, mobile, and satellite are presented as
the replacement context rather than a single claimed cause. Fact and text review
approved.

### Huia

- [New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/huia)
  identifies the species as extinct, records 1907 as the last accepted sighting,
  says some birds likely persisted into the 1920s, and attributes extinction
  mainly to introduced mammals and human hunting.
- [Museum of New Zealand Te Papa Tongarewa](https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/artist-fiona-pardington/meet-the-manu-in-taharaki-skyside/huia)
  independently records the 1907 last confirmed sighting, probable survival into
  the 1920s, extinction status, and the birds' contrasting bill shapes.

The asterisk and note retain the endpoint uncertainty. The illustration depicts
both sexes so the much longer, down-curved female bill and shorter, thicker male
bill can be checked directly. Fact and text review approved.

## Image review

Artwork was created with OpenAI's built-in image generator as original,
interpretive monochrome museum engraving. No external image was copied. The
approved files are:

| Exhibit | 2:1 master | 4:3 standard crop |
| --- | --- | --- |
| AOL dial-up | `assets/exhibits/responsive-v2/aol-dial-up-master-2x1.jpg` | `assets/exhibits/responsive-v2/aol-dial-up-standard-4x3.jpg` |
| Huia | `assets/exhibits/responsive-v2/huia-master-2x1.jpg` | `assets/exhibits/responsive-v2/huia-standard-4x3.jpg` |

Both masters are 1600×800 grayscale JPEGs and both standard derivatives are
1067×800. Direct crop inspection confirms that all AOL hardware, cables, discs,
and shadows remain complete; the first draft was rejected for failing this
check. Both Huia retain complete bills, tails, white tail bands, legs, and toes.
Generation prompts and the rejected-draft lesson are recorded in
`docs/IMAGE_WORKFLOW.md`.

Device-layout review and final approval are recorded by the green workflow runs
and pull request history. Production data must be restored after forced-entry
review before merge.

- AOL dial-up: all 12 OG, X landscape, and X portrait layouts inspected and
  approved in [workflow run 36102835166](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36102835166),
  artifact `10850530462`.
- Huia: the first targeted run exposed truncated afterlife text in X landscape
  Full, so that wording was shortened and the draft rejected. All 12 corrected
  layouts were inspected and approved in
  [workflow run 36103300898](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36103300898),
  artifact `10849763723`.

## Replacement candidates

- Argos catalogue: 4 / 5 / 4 / 5 / 3 = **21/25**. The Guardian's 30 July
  2020 report establishes the end of the twice-yearly printed catalogue while
  distinguishing continuing seasonal gift guides.
- i-mode: 3 / 4 / 5 / 5 / 4 = **21/25**. [NTT Docomo's primary announcement](https://www.docomo.ne.jp/info/news_release/2019/10/29_00.html)
  records the February 1999 launch, 31 March 2026 shutdown with FOMA, and the
  shift of resources toward 4G and 5G.

Both candidate reviews remain pending; their scores only prioritise future work.
