# MiniDisc Players and Falkland Islands Wolf review

Review date: 2026-10-03

## Editorial selection

- **MiniDisc Players** — promoted as exhibit 056. ITV records Sony's final
  player batch for March 2013; the copy distinguishes players from later blank
  media production.
- **Falkland Islands Wolf** — promoted as exhibit 057. The Falkland Islands
  Museum says the final Warrah was reported killed at Shallow Bay in 1876. The
  asterisk preserves that historical uncertainty.

## New candidate ratings

| Candidate | Recognition | Visual | Story | Endpoint | Fit | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Betamax Videocassettes | 5 | 5 | 5 | 5 | 3 | **23/25** |
| Mercury Automobiles | 4 | 5 | 4 | 4 | 4 | **21/25** |

Sony's first-party notice ended Betamax videocassette shipments in March 2016.
Ford's history says the Mercury brand was completely phased out in 2011; the
candidate uses an asterisk because the discontinuation plan was framed around
the end of 2010 and the final vehicle followed immediately after.

## Image review

The final grayscale JPEGs have exact 1600×800 (2:1) and 1067×800 (4:3)
dimensions. Direct master/crop inspection confirmed complete objects and animal
anatomy, neutral grayscale, and no text, logos, borders, or watermarks. Both
first passes were rejected as crop-unsafe; their complete prompts and approved
corrections are recorded in `docs/IMAGE_WORKFLOW.md`.

## Automated and layout review

Local validation passed for the 57-entry catalogue and 26-candidate queue:

- `node scripts/validate-data.js`
- `node scripts/validate-candidates.js`
- `node scripts/test-transform.js`
- `git diff --check`

Each promotion was then isolated on the pull-request branch and rendered by the
repository workflow in all 12 OG, TRMNL X, and TRMNL X portrait layouts. The
temporary fixture commits changed only the catalogue and branch preview
settings; the final branch restores the complete 57-entry catalogue and normal
production image URLs. Each targeted workflow repeated the three data and Saved
State checks above and passed `trmnlp lint` before rendering.

- MiniDisc Players: [TRMNL run 37102689360](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37102689360), artifact 11265928856 — all checks passed; no clipping, collisions, or unsafe crops.
- Falkland Islands Wolf: [TRMNL run 37102951599](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/37102951599), artifact 11266108836 — all checks passed; no clipping, collisions, or unsafe crops.

The final production-catalogue commit receives a separate TRMNL workflow run
before the pull request is made ready or merged.
