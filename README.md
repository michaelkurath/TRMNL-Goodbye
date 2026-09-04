# GOODBYE for TRMNL

**One lost thing, every day.**

GOODBYE is a quiet daily museum of discontinued, retired, replaced, demolished,
extinct, and nearly vanished things. Every TRMNL receives the same curated
farewell for the day, rendered as a monochrome museum placard.

## First version

- Ten sourced starter entries
- One UTC-based global selection per day
- Optional category filtering
- Full, half-horizontal, half-vertical, and quadrant layouts
- Responsive typography for TRMNL OG and TRMNL X
- Ten original monochrome exhibit illustrations optimized for e-ink
- No third-party image or hotlink dependencies

## Local preview

This repository follows the current [`trmnlp`](https://github.com/usetrmnl/trmnlp)
project structure.

```sh
gem install trmnl_preview
trmnlp serve
```

Or, with Docker:

```sh
docker run --rm -it -p 4567:4567 -v "$(pwd):/plugin" trmnl/trmnlp serve
```

The preview is available at `http://localhost:4567`.

## Data

The production polling payload is [`data/trmnl.json`](data/trmnl.json). Each
entry includes an exhibit image, status, dates, category, short epitaph,
explanation, survival note, and source. `node scripts/validate-data.js` checks
the schema, image URLs, and duplicate IDs.

Future exhibits are kept in [`data/candidates.json`](data/candidates.json) and
remain outside the live rotation until their fact, text, image, and final
reviews are approved. The complete review gate is documented in
[`ROADMAP.md`](ROADMAP.md). `node scripts/validate-candidates.js` checks the
candidate structure, review states, source URLs, text limits, and collisions
with the live catalogue.

## Exhibit images

The illustrations in [`assets/exhibits`](assets/exhibits) were generated
specifically for GOODBYE, then cropped, converted to grayscale, and optimized
for e-ink rendering. They are part of this plugin and are not archival source
photographs.

## License

The plugin is published under the
[TRMNL Community Plugin terms](https://trmnl.com/plugin-license); see
[`LICENSE.md`](LICENSE.md).
