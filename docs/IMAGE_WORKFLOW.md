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

## Generation records

### Sears Big Book

> Recompose the existing Sears catalogue scene by making the entire open book
> substantially smaller and slightly farther from the viewer. Preserve the
> enormous open vintage mail-order catalogue, page illustrations, monochrome
> engraving style, table, and restrained historical room. Keep every part of
> the book—including both lower cover corners and all page edges—strictly
> inside the centered 4:3 safe zone, the middle 60% of this wide canvas. Leave
> at least 12% clear breathing room between the book and every edge of that
> safe zone. The outer left and right wings must contain room background and
> tabletop only. No crop, people, logos, readable headline, frame, watermark,
> or colour.

### Vine

> Illustrate the original 2013–2017 Vine era through a period-correct
> early-2010s smartphone standing upright on a small tabletop tripod, actively
> recording a playful six-second looping video. Show a circular sequence of
> six bold film-frame marks around the phone to communicate a short repeating
> loop without using the Vine logo. Use a sparse bedroom or improvised young
> creator's filming setup from approximately 2014. Render it as a monochrome
> museum engraving with crisp black-and-white linework. Keep the complete
> phone, tripod, every foot, and all loop marks inside the centered 4:3 safe
> zone with 15% breathing room; outer wings contain background only. No people,
> logos, app icons, readable screen text, modern multi-lens camera clusters,
> captions, watermark, frame, or colour.

### Saturn V

> Create a historically accurate 2:1 monochrome museum engraving of a complete
> Saturn V standing vertically on its mobile launcher at Launch Complex 39.
> Preserve the three-stage proportions, Apollo spacecraft and escape-tower
> silhouette, period roll pattern, and launch-pad context. Keep the complete
> rocket and launcher inside the centered 4:3 safe area with 12–15% breathing
> room. Outer wings contain sky and distant landscape only. No people, smoke,
> captions, readable text, logos, watermark, frame, or colour.

### Western Union Telegram

> Create a historically grounded monochrome museum engraving of a vintage
> telegraph-office still life: a telegram form emerging from a telegraph
> printer, a folded delivery envelope, and a Morse key. Group every meaningful
> object inside the centered 4:3 safe area with at least 12% breathing room;
> outer wings contain desk and subdued office background only. Paper may carry
> faint abstract marks, but no readable words, names, dates, company branding,
> captions, watermark, frame, modern electronics, or colour.

### Arecibo Telescope

> Create a historically accurate 2:1 monochrome museum engraving of the intact
> Arecibo Observatory 305-metre telescope during its operational era. Show the
> complete spherical reflector dish, triangular instrument platform, Gregorian
> dome, three support towers, and cable system. Keep every part inside the
> centered 4:3 safe area with 10–15% breathing room; outer wings contain only
> tropical forest, distant hills, and sky. No collapse damage, people, vehicles,
> extra dishes, text, logos, watermark, border, or colour.

### Kodachrome

> Create a historically grounded 2:1 monochrome museum engraving of a
> mid-century photographic workbench with a generic 35 mm film canister, curling
> developed positive film, mounted slides, and a compact slide projector. Group
> every meaningful object inside the centered 4:3 safe area with 10–15%
> breathing room; outer wings contain empty workbench and darkroom background
> only. No readable words, Kodak branding, logos, captions, watermark, people,
> modern digital cameras, overall border, or colour.

### Pinta Island Tortoise

> Create a biologically accurate 2:1 monochrome natural-history engraving of
> one adult male saddle-backed Pinta Island giant tortoise in a restrained
> Galápagos habitat. Preserve the high front shell opening, long neck and limbs,
> and wrinkled skin. Keep the complete animal, every foot, and its shadow inside
> the centered 4:3 safe area with 12–15% breathing room; outer wings contain
> habitat only. No people, signs, text, logos, watermark, border, colour, eggs,
> or additional animals.

### Swiss Telephone Book

> Create a historically grounded 2:1 monochrome museum engraving of a thick
> Swiss regional telephone directory lying open on two closed volumes beside a
> classic European rotary telephone. Keep every page and cover corner, the full
> telephone, handset, cord, and shadows inside the centered 4:3 safe area with
> 10–15% breathing room; outer wings contain empty tabletop and subdued room
> background only. Pages may use abstract marks but no legible names, words,
> numbers, headings, logos, Swiss cross, captions, watermark, or colour.
