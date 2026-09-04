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
- No third-party images or image-rights dependencies

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
entry includes a status, dates, category, short epitaph, explanation, survival
note, and source. `node scripts/validate-data.js` checks the schema and duplicate
IDs.

## License

The plugin is published under the
[TRMNL Community Plugin terms](https://trmnl.com/plugin-license); see
[`LICENSE.md`](LICENSE.md).

