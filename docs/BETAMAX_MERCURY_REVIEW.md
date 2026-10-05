# Betamax and Mercury Automobiles review

Review dates: 2026-10-04–2026-10-05

## Editorial selection

- **Betamax Videocassettes** — promoted as exhibit 058. Sony records the first
  Betamax recorder in 1975, recorder production ending in 2002, and the final
  cassette shipments in March 2016. The exhibit endpoint refers specifically
  to Sony's recording media rather than every compatible tape in existence.
- **Mercury Automobiles** — promoted as exhibit 059. Ford records production
  ending in the fourth quarter of 2010 and the final Grand Marquis leaving the
  line on 4 January 2011. The asterisk preserves that model-year boundary.

## New candidate ratings

| Candidate | Recognition | Visual | Story | Endpoint | Fit | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Google+ | 5 | 3 | 5 | 5 | 3 | **21/25** |
| Swissair | 4 | 5 | 5 | 3 | 5 | **22/25** |

Google's first-party notice sets the consumer Google+ shutdown at 2 April 2019.
The Swiss National Museum treats Swissair's October 2001 grounding as its
symbolic end; the candidate retains an asterisk because limited flights and the
legal transition continued beyond the grounding.

## Image review

The final grayscale JPEGs have exact 1600×800 (2:1) and 1067×800 (4:3)
dimensions. Direct master/crop inspection confirmed complete hardware, vehicle,
cables, antenna, wheels, shadows, neutral grayscale, and no readable branding,
captions, borders, or watermarks. Both first passes were rejected as crop-unsafe;
their complete prompts and approved corrections are recorded in
`docs/IMAGE_WORKFLOW.md`.

## Automated and layout review

- Local catalogue validation: 59 exhibits; candidate validation: 26 candidates.
- Saved State transform tests and `git diff --check 7ac3470` passed.
- Four JPEGs verified as 8-bit grayscale at 1600×800 and 1067×800.
- Betamax: run [37279336610](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37279336610)
  passed lint/tests/rendering; all 12 artifact images were individually inspected.
  Full title, status, artwork, epitaph, rationale and footer fit without collisions.
- The initial X clipping affected even the existing Opportunity Rover control.
  The old approved run used `trmnl_preview` 0.14.2, while unpinned installs
  resolved to 0.16.0. Pinning 0.14.2 restored correct sizing; no layout-template
  changes or abbreviated Betamax title were required.
- A Mercury attempt returned cached Opportunity data from a moving raw branch
  URL. It was rejected and rerun with an immutable fixture commit URL.
- The immutable Mercury run 37279793784 exposed an OG-quadrant title/epitaph
  collision. The compact quadrant title threshold was reduced from 20 to 18
  characters; Betamax already uses that smaller title size and is unaffected.
- Corrected Mercury run [37280060789](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37280060789)
  passed lint/tests/rendering. All 12 artifact images were individually inspected;
  the quadrant collision is resolved and artwork, labels, text and footer fit.
- Production catalogue and main polling URL were restored. The final merge gate
  requires a successful production CI run at the exact PR head, recorded in PR #56.
