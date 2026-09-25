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

identify assets/exhibits/responsive-v2/<id>-{master-2x1,standard-4x3}.jpg
```

The final `identify` check must report exactly `1600x800` for the master and
`1067x800` for the standard crop. Keep rejected generations out of production;
record only the prompt that produced the approved composition, including any
crop-safety correction that materially changed it.

If the centered crop cuts any part of the subject, regenerate or recompose the
master. Do not solve the problem with a one-off crop offset: that hides a bad
safe-zone composition and makes later layout changes fragile.

## Review gate

Before connecting the files to production data:

1. Compare the illustration with authoritative references for the exact model,
   species, era, and identifying physical details.
2. Inspect both JPEGs directly and reject clipped wings, tails, cables, limbs,
   shadows, signs, or other meaningful parts.
   Review the centered 4:3 derivative as its own image rather than inferring
   crop safety from the 2:1 master.
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

### Mir Space Station

> Create a historically grounded 2:1 monochrome museum engraving of the
> Russian Mir space station in its completed late-1990s configuration. Preserve
> the long cylindrical core axis with Kvant-1 aft, the docking node and the
> asymmetric radial Kvant-2, Kristall, Spektr, and Priroda modules, plus the
> irregular solar arrays attached directly to modules. Show the station in a
> three-quarter view above a restrained Earth limb. Keep every module, array
> tip, boom, and antenna inside the centered 4:3 safe zone with at least 12%
> breathing room; outer wings contain only Earth and stars. No ISS-style long
> truss, symmetrical four-arm cross, huge ISS solar wings, Shuttle, re-entry,
> text, flags, logos, captions, border, watermark, colour, or cropped parts.

### Netscape Navigator

> Create a 2:1 monochrome museum-catalog engraving evoking Netscape Navigator
> and early graphical web browsing circa 1995 without using trademarked logos.
> Show a complete beige CRT monitor with a generic early browser window and
> abstract starry-horizon page, a beige tower, full keyboard, external dial-up
> modem, wired mouse, and cables as a compact group. Keep every object and
> shadow strictly inside the centered 4:3 safe zone with 12% breathing room;
> outer wings contain only an empty desk and wall. Use crisp black-ink archival
> crosshatching on warm off-white paper. No readable web text, Netscape logo,
> company names, people, extra desk objects, modern screen, captions, border,
> watermark, colour, or cropped hardware.

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

### Cassini

> Create a historically accurate monochrome museum engraving of NASA's Cassini
> orbiter approaching Saturn at the end of its mission. Keep the complete
> spacecraft substantially smaller than the canvas and strictly inside the
> centred 4:3 safe zone, including the full magnetometer boom, antenna rods,
> high-gain dish, generators, and thrusters. Outer wings contain Saturn, rings,
> stars, and empty space only. Use crisp, high-contrast archival linework. One
> spacecraft only; no text, logos, captions, watermark, frame, colour, flames,
> explosion, or cropped appendages.

### Original Penn Station

> Create a historically accurate monochrome architectural engraving of the
> monumental main waiting room of New York's original Pennsylvania Station
> before demolition. Preserve the immense Roman-inspired hall, coffered barrel
> vaults, tall arched thermal windows, stone columns, and tiny period travellers
> for scale. Keep the central vault, complete major arches, and defining columns
> inside the centred 4:3 safe zone; outer wings contain secondary colonnades and
> shadow only. No modern signs, Madison Square Garden, readable text, logos,
> captions, watermark, frame, colour, or cropped central arch.

### Internet Explorer

> Create a monochrome museum engraving of a complete late-1990s beige desktop
> computer displaying a period browser window and one recognisable lowercase
> “e” with an orbital swoosh. Make the complete monitor, tower, keyboard, mouse,
> and visible cables substantially smaller than the canvas and keep every item
> strictly inside the centred 4:3 safe zone. Outer wings contain empty wall and
> desk only. No readable webpage text, slogans, wordmarks, additional logos,
> people, modern flat panels, colour, watermark, frame, or cropped hardware.

### Dodo

> Create a scientifically grounded monochrome natural-history engraving of one
> living dodo in a restrained Mauritius forest. Preserve a robust hooked bill,
> small wings, rounded body, strong legs, and short tufted tail without using
> the exaggerated obese Victorian caricature. Keep the complete bird—from bill
> and tail tuft to every toe—strictly inside the centred 4:3 safe zone with at
> least 15% breathing room. Outer wings contain habitat only. No text, humans,
> ships, predators, colour, watermark, frame, or cropped anatomy.

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

### Netflix DVD-by-mail

> Create a 2:1 monochrome museum-catalog engraving of a generic unbranded
> postal DVD sleeve with circular window, a reflective disc partly withdrawn,
> and a modest residential mailbox suggesting home delivery. Use
> late-1990s-to-2000s material details and crisp black-ink crosshatching on
> warm off-white paper. Keep every meaningful object fully inside the centered
> 4:3 safe zone with 12–15% breathing room; outer wings contain quiet paper
> texture only. No people, logos, readable text, captions, border, watermark,
> gradients, or colour.

### Google Stadia

> Create a 2:1 monochrome museum-catalog engraving of an unbranded cloud-gaming
> controller in front of a home television. The screen shows an abstract,
> non-copyrighted polygonal game landscape dissolving into cloud-server and
> wireless-signal motifs. Use a late-2010s living-room setting and crisp
> black-ink crosshatching on warm off-white paper. Keep the controller,
> television, cloud, and signals fully inside the centered 4:3 safe zone with
> 12–15% breathing room; outer wings contain quiet room background only. No
> people, logos, readable text, captions, border, watermark, gradients, or
> colour.

### BBC Ceefax

> Create a historically grounded 2:1 monochrome museum-catalog engraving of a
> late-1980s British living room with one period CRT television on a simple
> stand and a remote control nearby. The screen shows a generic teletext-style
> information page made from chunky pixel blocks, simple columns, a blocky
> header band, a page-number area, and weather- and news-like panels. Keep the
> complete television, stand, remote, screen, power cord, feet, and shadows
> inside the centered 4:3 safe area with 12–15% breathing room; outer wings
> contain room background only. No people, readable words, headlines, logos,
> trademarks, captions, watermark, border, colour, modern flat-screen TV,
> smartphone, or extra screen.

### New York subway token

> Create a 2:1 monochrome museum-catalog engraving of an iconic New York City
> subway token with its distinctive Y-shaped cutout, standing upright on a
> worn station counter with a period turnstile and tiled subway wall behind
> it. Keep the complete token and turnstile inside the centered 4:3 safe zone
> with generous breathing room; outer wings contain station background only.
> Use tactile metal texture and crisp black-ink crosshatching. No readable
> lettering, logos, MetroCards, people, captions, watermark, border, or colour.

### Paper airline ticket

> Create a historically grounded 2:1 monochrome museum-catalog engraving of a
> late-20th-century airport counter with an open multi-coupon paper airline
> ticket wallet, one loose boarding coupon, and one luggage tag. Keep the
> complete document group substantially smaller than the frame and strictly
> inside the middle 55% safe zone; outer wings contain quiet airport
> background only. Use abstract unreadable marks on all paper. No airline
> branding, readable words, names, dates, logos, modern phone, QR code,
> barcode, captions, watermark, border, or colour.

Correction pass:

> Preserve the composition and object positions. Remove or replace every
> readable word, number, airline name, destination, date, code, and logo from
> the airport sign, flight board, wallet, tickets, coupons, and luggage tag.
> Use only soft abstract bars, rectangles, tiny lines, grids, perforations,
> and illegible marks. No readable text anywhere, logos, QR codes, barcodes,
> watermark, caption, or colour.

### Skype

> Create a 2:1 monochrome museum-catalog illustration of a mid-2000s desktop
> video-calling setup: a complete flat-panel monitor with a small webcam, a
> generic two-person video-call interface, and a wired headset. Keep the
> complete monitor, stand, webcam, headset, cables, and controls inside the
> centered 4:3 safe zone with 12–15% breathing room; outer wings contain only
> desk and quiet room background. No Skype logo, wordmark, readable interface
> text, captions, watermark, border, or colour.

Production note: the approved asset uses a detailed AI-generated archival
engraving/halftone scene with period-appropriate laptop, webcam, headset, and a
generic video-call window. It intentionally avoids the Skype logo, wordmark,
and readable interface text. Exported as grayscale JPEG at 1600×800 and
1067×800.

### Domestic icebox

> Create a historically grounded 2:1 monochrome museum-catalog illustration of
> a late-19th/early-20th-century wooden household icebox with insulated upper
> ice compartment, lower food compartment, metal hinges and latches, a block of
> ice, drain pan, and simple ice-delivery tools nearby. Keep every meaningful
> object inside the centered 4:3 safe zone with 12–15% breathing room; outer
> wings contain only floor and subdued room background. No modern refrigerator,
> electric compressor, readable text, branding, captions, watermark, border,
> or colour.

Production note: the approved asset uses a detailed AI-generated archival
engraving/halftone kitchen scene based on museum descriptions of wooden,
metal-lined iceboxes and block-ice delivery. The upper ice chamber, lower food
storage, hinges, latches, drain hardware, and ice tools remain visually clear.
Exported as grayscale JPEG at 1600×800 and 1067×800.

### AOL dial-up internet

> Regenerate the AOL dial-up museum still life as a much smaller, tightly
> packed central composition on a 2:1 landscape canvas. Every meaningful object
> must fit entirely within the middle 55% of the canvas width, leaving very
> wide empty desk-and-wall wings. Show one complete late-1990s beige CRT
> monitor, compact tower, full keyboard, wired mouse, small external dial-up
> modem with indicator lights, compact corded landline telephone, phone cable,
> and exactly two generic CD-ROM discs. Stack the telephone and modem beside
> the tower and tuck both discs near the keyboard. Keep the entire group,
> including all corners, cables, shadows, handset, coiled cord, mouse, and disc
> edges, inside the centered 4:3 safe zone with at least 12% breathing room.
> The screen has only abstract unreadable connection marks. Crisp monochrome
> archival crosshatching; no people, AOL branding, running-man icon, company
> name, readable text, modern screen, laptop, Wi-Fi symbol, caption, border,
> watermark, colour, or cropped parts.

The first draft was rejected because the telephone and discs fell outside the
centered crop. The correction above produced the approved master and derivative.

### Huia

> Create a scientifically grounded 2:1 monochrome natural-history engraving
> of one adult male and one adult female Huia (`Heteralocha acutirostris`) on a
> restrained native New Zealand forest branch. Show both as glossy-black
> wattlebirds with long black tails ending in a bold white band, pale ivory
> bills, sturdy legs, and small wattles at the bill base. Preserve the defining
> bill dimorphism: the female has a very long, fine, strongly down-curved bill;
> the male has a shorter, thicker, nearly straight tapering bill. Keep both
> birds complete from bill tip to tail tip and every toe inside the centered
> 4:3 safe zone with at least 15% breathing room; outer wings contain habitat
> only. Crisp high-contrast scientific linework; no text, humans, ornaments,
> cages, museum mounts, other species, frame, watermark, cropped anatomy,
> fantasy plumage, invented features, or colour.
