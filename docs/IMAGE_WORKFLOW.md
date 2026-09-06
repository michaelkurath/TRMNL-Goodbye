# Exhibit image workflow

Use this process for every new or replacement GOODBYE illustration. The goal is
one composition that works on TRMNL X, OG, and compact layouts without cutting
off the subject.

## Required files

Each exhibit uses two production assets:

- `<id>-master-2x1.jpg` — 1600 x 800 px, used by TRMNL X Full.
- `<id>-standard-4x3.jpg` — 1067 x 800 px, used by OG and compact layouts.

Store both files in `assets/exhibits/responsive-v2/` and reference them through
`image_url_wide` and `image_url_standard` in `data/trmnl.json`.

## Generate the master

Use an existing approved illustration as the visual reference when one exists.
Generate or recompose it as a 2:1 monochrome museum engraving with:

- the complete subject inside the centered 4:3 safe zone;
- at least 10–15% breathing room around every identifying part;
- background only in the outer left and right wings of the canvas;
- no captions, labels, logos, watermarks, frames, or decorative borders;
- crisp black-and-white linework that remains readable after e-ink dithering.

The centered safe zone in a 1600 x 800 master is approximately 1067 x 800,
running from x=266 to x=1333. Do not merely ask for a wide image and assume it
will crop safely. Explicitly ask for the entire object to remain inside this
area.

Suggested prompt structure:

> Recompose this approved illustration as a 2:1 landscape monochrome museum
> engraving. Keep the entire [subject], including [critical extremities], fully
> inside the centered 4:3 safe area with 15% breathing room. The outer left and
> right areas must contain background only. Preserve [model/species/era details].
> No text, logos, watermark, frame, or extra subjects.

List subject-specific accuracy constraints in the prompt. Examples include four
engines for a Boeing 747, three main engines for the Space Shuttle orbiter, or
the correct silhouette and plumage for a species.

## Export the assets

Normalize the generated master and create the standard derivative with
ImageMagick:

```sh
convert source.png -colorspace Gray -resize '1600x800^' \
  -gravity center -extent 1600x800 -quality 88 \
  assets/exhibits/responsive-v2/<id>-master-2x1.jpg

convert assets/exhibits/responsive-v2/<id>-master-2x1.jpg \
  -gravity center -crop 1067x800+0+0 +repage -quality 88 \
  assets/exhibits/responsive-v2/<id>-standard-4x3.jpg
```

If the centered crop cuts any part of the subject, regenerate or recompose the
master. Do not solve the problem with a one-off crop offset: that hides a bad
safe-zone composition and makes later layout changes fragile.

## Review gate

Before connecting the files to production data:

1. Compare the illustration with authoritative references for the exact model,
   species, era, and identifying physical details.
2. Inspect both JPEGs directly and reject clipped wings, tails, cables, limbs,
   shadows, signs, or other meaningful parts.
3. Check that small details do not turn into misleading shapes after grayscale
   conversion and e-ink dithering.
4. Temporarily point asset URLs at the feature branch and render all four views
   for both TRMNL X and OG with `trmnlp`.
5. Inspect the actual PNG previews, with X Full as first priority and OG Full as
   second priority. Also spot-check both half views and quadrant.
6. Run `node scripts/validate-data.js`,
   `node scripts/validate-candidates.js`, and `git diff --check`.
7. Change the asset URLs to permanent `main` URLs only after the visual review
   passes, then require a green final CI run before merging.

Generated artwork is still subject to the fact, text, image, and final approval
gates in `ROADMAP.md`.
