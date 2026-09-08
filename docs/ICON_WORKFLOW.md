# GOODBYE icon workflow

## Concept

The icon is an empty museum frame whose upper-right corner dissolves into three
blocks. The frame represents the collection; the empty centre and disappearing
corner represent things that have been lost. It deliberately avoids tombstones,
coffins, or skulls because most GOODBYE exhibits were discontinued or retired,
not deceased.

## Source prompt

The approved artwork was generated with OpenAI's built-in image generator using
this prompt:

```text
Use case: logo-brand
Asset type: square TRMNL plugin icon
Primary request: Replace the previous concept with a much simpler pictogram:
a bold black museum picture frame, square-ish, with its upper-right corner
missing and dissolving into exactly three large square blocks drifting
upward-right. The empty white center represents the lost exhibit.
Style/medium: ultra-minimal flat vector pictogram, pure black shapes on a solid
white background.
Composition/framing: centered, balanced, generous safe margin, optimized to
remain unmistakable at 48×48 pixels.
Constraints: one frame only; thick uniform strokes; exactly three dissolution
blocks; solid white background; pure black and white; no gray; no transparency;
no text.
Avoid: vase, pedestal, artwork inside the frame, thin outlines, decorative
corners, gradients, shadows, texture, engraving, tiny pixels, border around the
whole canvas, watermark.
```

## Production files

- `goodbye-icon.svg`: hand-authored vector master and status-bar geometry
- `goodbye-icon-master.png`: 1024 × 1024 master
- `goodbye-icon.png`: 512 × 512 marketplace asset
- `goodbye-icon-128.png`: 128 × 128 compact asset

All files are square grayscale PNGs on a white background. The source was
thresholded to hard black and white before export. Always inspect a 48 × 48
render before accepting future changes; small-size recognition is more important
than detail at master resolution.

## Publishing

The status bar embeds the same SVG geometry from `src/shared.liquid` so all four layouts use the approved mark. The repository stores the approved icon assets, but TRMNL's recipe
`settings.yml` does not reference a marketplace icon. Select
`assets/icon/goodbye-icon.png` manually when publishing or updating the plugin
in TRMNL.
