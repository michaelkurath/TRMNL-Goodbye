# Swissair and Windows Phone review

Review date: 2026-10-06

## Editorial selection

- **Swissair** — promoted as exhibit 060. The Swiss Federal Archives record its
  1931 founding and 2001 grounding. The Swiss National Museum describes the
  October grounding as the airline's symbolic end. The asterisk preserves the
  distinction between the grounding and limited transition flights into 2002.
- **Windows Phone** — promoted as exhibit 061. Microsoft states that Windows 10
  Mobile version 1709 was the final release and that support ended on
  10 December 2019. The asterisk preserves briefly continuing services and an
  additional update after the stated support endpoint.

## New candidate ratings

| Candidate | Recognition | Visual | Story | Endpoint | Fit | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Xbox 360 Store | 5 | 5 | 4 | 5 | 3 | **22/25** |
| Kepler Space Telescope | 4 | 5 | 5 | 5 | 3 | **22/25** |

Xbox states that new purchases ended on 29 July 2024 while owned games,
re-downloads, supported multiplayer, and backward-compatible purchases
continued. NASA retired Kepler on 30 October 2018 after its science fuel was
exhausted, leaving more than 2,600 confirmed exoplanets at retirement.

## Image review

The four final assets are 8-bit grayscale JPEGs at exact 1600×800 and 1067×800
dimensions. The initial Swissair master was rejected because its wingtips were
outside the centered crop-safe area. The corrected aircraft and the first-pass
Windows Phone still life were inspected directly in both aspect ratios. Complete
aircraft geometry, both phones, screen edges and shadows remain visible; there
are no readable brand names, captions, borders or watermarks. Full prompts and
the Swissair correction are recorded in `docs/IMAGE_WORKFLOW.md`.

## Automated and layout review

- Local catalogue validation passed with 61 exhibits and candidate validation
  passed with 26 candidates.
- Saved State transform tests and `git diff --check` passed.
- `trmnlp lint`, data tests, and rendering passed in both isolated CI runs.
- Swissair run [37427026064](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37427026064):
  all 12 OG, X landscape, and X portrait images were inspected individually;
  complete aircraft geometry, title, rationale, archive note and footers fit.
- Windows Phone run [37427281346](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37427281346):
  all 12 images were inspected individually; both devices, tiled screens,
  title, rationale, archive note and footers fit without clipping.
- The full 61-entry production catalogue and main polling URL are restored
  before the final CI and merge gate.
