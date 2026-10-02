# Boeing 747 Production and Orkut review

Review date: 2026-10-02

## Editorial selection

- **Boeing 747 Production** — promoted as exhibit 054. Boeing's release dates
  the programme to 1967–2023 and identifies the final delivery as the 1,574th
  aircraft. The copy distinguishes the end of production from continued
  service.
- **Orkut** — promoted as exhibit 055. Google's archived farewell announcement
  sets the shutdown at 30 September 2014, ten years after launch.

## New candidate ratings

| Candidate | Recognition | Visual | Story | Endpoint | Fit | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| MiniDisc Players | 4 | 5 | 4 | 5 | 4 | **22/25** |
| Falkland Islands Wolf | 3 | 5 | 5 | 4 | 5 | **22/25** |

MiniDisc's reported final production date is March 2013. The Falkland Islands
Museum describes 1876 as the reported last killing; the catalogue preserves
that uncertainty with an asterisk.

## Image review

The final grayscale JPEGs have exact 1600×800 (2:1) and 1067×800 (4:3)
dimensions. Direct master/crop inspection confirmed complete silhouettes,
legible subjects, neutral grayscale, and no text, logos, borders, or watermarks.
The rejected first passes and complete correction prompts are recorded in
`docs/IMAGE_WORKFLOW.md`.

## Automated and layout review

Local validation passed for 55 production entries, 26 candidates, the Saved
State transform tests, grayscale dimensions, and whitespace checks.

- **Boeing 747 Production:** all four layouts inspected and approved on TRMNL
  OG, X landscape, and X portrait (12 previews); [run
  36973947176](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36973947176),
  artifact 11213005651.
- **Orkut:** all four layouts inspected and approved on TRMNL OG, X landscape,
  and X portrait (12 previews); [run
  36974247527](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36974247527),
  artifact 11213530056.

Both targeted runs also passed the data validators, candidate validator, Saved
State tests, and `trmnlp lint`. Temporary fixture commits used branch polling
and image URLs so Actions could render each new exhibit deterministically. The
final commit restores the complete 55-entry catalogue, permanent `main` asset
URLs, and the production polling URL.
