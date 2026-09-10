# GOODBYE for TRMNL

**One lost thing, every refresh — no repeats until the collection has cycled.**

GOODBYE is a quiet museum of discontinued, retired, replaced, demolished,
extinct, and nearly vanished things. Each TRMNL refresh selects a curated
farewell, rendered as a monochrome museum placard. Saved State remembers the
current rotation for each plugin installation, so an exhibit is not repeated
until every entry in the selected category has appeared.

## First version

- Twenty sourced live entries
- A shuffled, no-repeat rotation using TRMNL Saved State
- Optional category filtering
- Full, half-horizontal, half-vertical, and quadrant layouts
- Responsive typography for TRMNL OG and TRMNL X
- Twenty original monochrome exhibit illustrations with responsive 4:3 and 2:1 crops
- No third-party image or hotlink dependencies

## Plugin icon

![GOODBYE icon](assets/icon/goodbye-icon.svg)

The empty museum frame dissolving into pixels is the approved GOODBYE icon.
Production assets and the repeatable source prompt are stored in
[`assets/icon`](assets/icon) and documented in
[`docs/ICON_WORKFLOW.md`](docs/ICON_WORKFLOW.md).

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

Run the data and Saved State rotation checks with:

```sh
node scripts/validate-data.js
node scripts/validate-candidates.js
node scripts/test-transform.js
```

## Data

The production polling payload is [`data/trmnl.json`](data/trmnl.json). Each
entry includes a master image, 4:3 standard crop, 2:1 wide crop, status, dates, category, short epitaph,
explanation, survival note, and source. `node scripts/validate-data.js` checks
the schema, image URLs, and duplicate IDs.

Future exhibits are kept in [`data/candidates.json`](data/candidates.json) and
remain outside the live rotation until their fact, text, image, and final
reviews are approved. The complete review gate is documented in
[`ROADMAP.md`](ROADMAP.md). `node scripts/validate-candidates.js` checks the
candidate structure, review states, source URLs, text limits, and collisions
with the live catalogue.

## Saved State rotation

[`src/transform.js`](src/transform.js) selects the next exhibit before Liquid
renders the screen. It keeps a compact history of displayed entry IDs in
`trmnl_state`, separately for the `all` pool and each category. Invalid or
removed IDs are discarded automatically, empty or unknown category filters
fall back to the full catalogue, and a completed rotation resets on the next
refresh. New installations begin with an empty history.

Saved State requires a Polling, Static, or Webhook strategy and a Serverless
transform. The plugin uses Polling with the Node 20 runtime. In the TRMNL markup
editor, **Clear Saved State** starts the rotation over; Force Refresh preserves
the history.

## Exhibit images

The illustrations in [`assets/exhibits`](assets/exhibits) were generated
specifically for GOODBYE, then cropped, converted to grayscale, and optimized
for e-ink rendering. Each exhibit has a 4:3 standard crop for OG and compact
layouts and a 2:1 wide crop for X Full. They are part of this plugin and are
not archival source photographs. The repeatable generation, safe-zone, export,
and device-preview process is documented in
[`docs/IMAGE_WORKFLOW.md`](docs/IMAGE_WORKFLOW.md).

## License

The plugin is published under the
[TRMNL Community Plugin terms](https://trmnl.com/plugin-license); see
[`LICENSE.md`](LICENSE.md).
