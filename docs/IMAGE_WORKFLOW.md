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

### RMS Queen Mary passenger service

> Create a historically accurate monochrome museum-engraving exhibit image of
> RMS Queen Mary during her active transatlantic passenger service. Show the
> complete ocean liner in port-bow three-quarter view at sea, with exactly
> three large funnels, two masts, long stepped superstructure, dark hull, pale
> upperworks, cruiser stern, and period 1930s–1960s proportions. Keep the
> entire ship—bow, stern, mast tops, funnel tops, and wake—inside the central
> 60% of the canvas with at least 15% breathing room, so a centered 4:3 crop
> retains the whole subject. Outer wings contain only calm ocean and open sky.
> Fine black-and-white copperplate linework on a light paper background. No
> four-funnel Titanic silhouette, modern cruise ship, readable ship name,
> Cunard logo, people, other ships, text, border, watermark, or colour.

### Bramble Cay melomys

> Create a scientifically grounded monochrome natural-history engraving of
> one Bramble Cay melomys (`Melomys rubicola`) on coral rubble with sparse cay
> vegetation, shallow water, and a low horizon. Preserve the compact body,
> slightly blunt snout, fine whiskers, rounded ears, dark dorsal fur, pale
> underside, slender limbs, and long scaly sparsely haired tail. Keep the
> complete animal—from nose and whiskers through every toe and the curved tail
> tip—strictly inside the middle 55% of the 2:1 canvas, with at least 12%
> breathing room inside the centered 4:3 safe zone. Outer wings contain only
> habitat and water/sky. No giant rat, fantasy traits, dramatic flood, dead
> animal, other animals, text, labels, caption, border, watermark, or colour.

The first melomys draft was rejected because its tail tip crossed the centered
4:3 crop. The approved correction made the animal substantially smaller while
preserving the habitat and scientific-plate treatment. Both exhibits were
generated with the built-in image generator, normalized to grayscale JPEG, and
exported at 1600×800 and 1067×800.

### SR.N4 Channel hovercraft

> Create a historically accurate 2:1 monochrome museum engraving of an SR.N4
> Mk III cross-Channel hovercraft in service. Preserve its broad rectangular
> ferry body, blunt bow loading-ramp form, deep flexible skirt, two-level
> passenger superstructure, bridge windows, and four huge propellers mounted
> high on pylons. Keep the complete craft, every propeller blade, pylon, skirt
> edge, bow, stern, and immediate spray strictly inside the middle 55% of the
> canvas, with at least 12% background breathing room inside the centered 4:3
> safe zone. Outer wings contain only water, sky, and distant coast. No people,
> readable vessel name, operator branding, text, border, watermark, colour,
> aircraft wings, enclosed jet engines, conventional hull, or extra craft.

### Caribbean monk seal

> Create a scientifically grounded 2:1 natural-history engraving of one living
> Caribbean monk seal (`Neomonachus tropicalis`) on a sandy Caribbean cay.
> Preserve its robust true-seal body, rounded head, short broad muzzle, large
> eyes, absent external ear flaps, short foreflippers, tapering hind flippers,
> dark dorsal coat, and paler underside. Keep the complete animal—from nose and
> whiskers through every flipper tip—strictly inside the middle 50% of the
> canvas with at least 15% breathing room inside the centered 4:3 safe zone.
> Outer wings contain only sand, low vegetation, water, and sky. No sea-lion
> posture, tusks, spots, people, boats, other animals, hunting, death imagery,
> text, labels, border, watermark, or colour.

The initial hovercraft and seal generations were rejected because their
extremities crossed or approached the centered crop. The approved correction
passes scaled both subjects down while preserving their identifying anatomy
and machinery. Both exhibits were generated with the built-in image generator,
normalized to grayscale JPEG, and exported at 1600×800 and 1067×800.

### LaserDisc players

> Recompose a historically grounded LaserDisc exhibit as a small, tightly
> centred still life on a 2:1 canvas. Show a complete late-1980s home-video
> player with its disc tray open, one unmistakably large 30-centimetre optical
> disc on the tray, a second full-size disc leaning against a plain square
> sleeve, a compact period CRT television, and a simple remote. The discs must
> read as much larger than CDs. Keep the complete tray, player, both discs,
> sleeve, remote, and television within the middle 60% of the canvas with at
> least 12% breathing room; outer wings contain only shelf, wall, and shadow.
> Crisp high-contrast monochrome archival engraving with restrained halftone
> shading. No people, brand marks, logos, readable labels, modern flat screen,
> Blu-ray cases, caption, frame, watermark, colour, or cropped objects.

The first composition was rejected because its open tray crossed the centred
4:3 crop. The approved correction reduced and regrouped the full still life.

### Google Hangouts

> Create a historically grounded monochrome museum engraving evoking a
> mid-2010s group video call without using protected branding. Show a complete
> 2014-era laptop with a generic three-person call grid, a complete
> single-camera smartphone, and a compact webcam. Use abstract silhouettes and
> blank speech bubbles only. Keep every device and cable entirely inside the
> centred 4:3 safe zone with clear breathing room; outer wings contain only a
> quiet period room and desk. Crisp high-contrast black-and-white archival
> linework with restrained halftone shading. No identifiable people, Google or
> Hangouts logos, app icons, readable interface text, modern multi-camera phone,
> caption, frame, watermark, colour, or cropped hardware.

The first two wide compositions were rejected because peripherals crossed the
centred crop. The final correction removed the nonessential headset and kept
the laptop, phone, and webcam intact. Its 3:2 source was fitted to 1200×800 and
extended with neutral background wings to 1600×800 before the standard centred
4:3 derivative was exported. Both approved exhibits were generated with the
built-in image generator and normalized to monochrome JPEG.

### Segway PT

> Create a historically accurate 2:1 monochrome museum engraving of one
> original Segway PT personal transporter in the classic early-2000s to 2010s
> i2 form. Show its broad upright handlebars, central steering shaft, low
> standing platform, paired side-by-side wheels, full tyres, and fenders in a
> three-quarter front view on a restrained empty urban promenade. Keep the
> complete handlebars, shaft, platform, both wheels, tyres, fenders, and cast
> shadow strictly inside the middle 50% of the canvas with at least 15%
> breathing room inside the centred 4:3 safe zone; outer wings contain only
> paving and distant architecture. Crisp black-and-white archival copperplate
> linework with restrained halftone shading. One machine only; no rider,
> Segway wordmark, logos, readable text, modern kick scooter, hoverboard,
> bicycle seat, third wheel, caption, frame, watermark, colour, or cropped parts.

### Christmas Island pipistrelle

> Create a scientifically grounded 2:1 monochrome natural-history engraving
> of one living Christmas Island pipistrelle (`Pipistrellus murrayi`) in
> natural banking flight at a restrained dusk rainforest edge. Preserve its
> compact dark-furred body, short muzzle without a nose leaf, small triangular
> ears, broad membranous wings, visible wing fingers, tiny feet, and tail
> enclosed in the interfemoral membrane. Keep both wing tips, ears, feet, and
> tail membrane strictly inside the middle 50% of the canvas with at least 15%
> breathing room inside the centred 4:3 safe zone; outer wings contain only sky
> and habitat. Crisp black-and-white scientific-plate linework with restrained
> halftone shading. One bat only; no vampire fangs, fruit-bat head, exaggerated
> claws, dead animal, skeleton, detector, people, text, labels, caption, frame,
> watermark, colour, or cropped anatomy.

Both first-pass compositions passed direct master and centred-derivative crop
inspection. They were generated with the built-in image generator, normalized
to grayscale JPEG, and exported at 1600×800 and 1067×800.

### Printed UK Yellow Pages

> Create a finished exhibit illustration for a monochrome e-ink museum
> catalogue, landscape 2:1 composition. Subject: the final era of the printed
> UK Yellow Pages, a very thick well-used business telephone directory resting
> on a modest late-1990s hallway table beside a classic corded landline
> handset. The directory is open enough to reveal dense abstract column
> texture and thumb-tab edges, but absolutely no readable words, no logos, no
> walking-fingers mark, no trademarks. Documentary still-life, quiet elegiac
> mood, tactile paper and plastic. Strict black, white, and neutral gray only,
> high contrast, coarse halftone/stipple shading suitable for an e-ink screen,
> no color tint. Keep the complete directory and complete telephone entirely
> within the central 50% of the canvas with generous calm background extending
> on both sides; no important detail near any edge, because the same master
> will be center-cropped to 4:3. No border, no caption, no typography, no
> watermark.

### Microsoft Kinect

> Create a finished exhibit illustration for a monochrome e-ink museum
> catalogue, landscape 2:1 composition. Subject: Microsoft Kinect's 2010s
> motion-control era, centered on a complete black horizontal depth-sensor bar
> with its characteristic three circular camera/sensor apertures, sitting on
> its small pedestal in front of a simple early-2010s living-room television
> and game console. Suggest invisible motion sensing with a restrained fan of
> tiny abstract infrared dots in the air; no people. No logos, no Xbox symbol,
> no readable text, no trademarks. Documentary product still-life, nostalgic
> but unsentimental. Strict black, white, and neutral gray only, high contrast,
> coarse halftone/stipple shading suitable for an e-ink screen. Keep the
> complete sensor bar, pedestal, console, and essential scene entirely within
> the central 50% of the canvas with generous background on both sides; no
> important detail near any edge, because the same master will be
> center-cropped to 4:3. No border, no caption, no typography, no watermark.

Both first-pass compositions passed direct master and centred-derivative crop
inspection. They were generated with the built-in image generator, normalized
to grayscale JPEG, and exported at 1600×800 and 1067×800. The standard files
are strict centred crops of the corresponding masters; no subject-specific
offset was required.

### Woolworths UK stores

> Create a documentary museum illustration of a complete late-2000s British
> high-street variety-store frontage at closing time, evoking Woolworths UK
> without copying branding: broad blank fascia, recessed glass entrance, large
> display windows with abstract toys, household goods, record cases and
> distinctive pick-and-mix sweet bins visible inside, several checkout
> counters beyond, security shutters partly lowered, quiet pavement. No
> people. The mood is elegiac but ordinary, the final trading day of a familiar
> neighbourhood shop. Strict black, white and neutral gray only, crisp
> high-contrast archival ink drawing with coarse halftone/stipple shading for
> e-ink. Keep the entire shopfront, both outer jambs, fascia, doorway and
> pavement threshold inside the central 50% of the wide canvas with at least
> 15% breathing room; outer wings contain only neighbouring blank brick
> façades and pavement so a centered 4:3 crop preserves the complete subject.
> No Woolworths name, no red color cue, no logos, no readable sale signs, no
> trademarks, no caption, no border, no watermark.

The initial storefront filled too much of the wide canvas and was rejected.
The approved edit used this correction:

> Recompose only the supplied monochrome British high-street variety-store
> illustration for a crop-safe GOODBYE master. Preserve the same storefront
> design, blank fascia, glass entrance, display windows, toys, household goods,
> record cases, pick-and-mix sweet bins, checkout counters, partly lowered
> shutters, documentary engraving style, and empty street. Scale the complete
> shopfront down by about 35% and center it. The entire fascia, both outer stone
> jambs, both complete display windows, doorway, shutter edges, and pavement
> threshold must fit inside the middle 48% of the 2:1 canvas with at least 15%
> breathing room on every side. Extend both outer wings with quiet blank
> neighbouring brick façades and pavement only. Do not crop the storefront.
> Keep strict black, white and neutral gray. No people, Woolworths name, logos,
> readable signs, trademarks, caption, border, watermark or color.

### Xerces blue butterfly

> Create a scientifically grounded natural-history plate of one living adult
> male Xerces blue butterfly (`Glaucopsyche xerces`), seen slightly from above
> with all four wings fully open while perched on a small sprig of deerweed in
> San Francisco coastal dune habitat. Preserve the species' delicate lycaenid
> proportions, velvety blue dorsal wing fields translated into light
> silvery-gray stippling, narrow dark outer margins, subtle pale fringe,
> slender body, clubbed antennae and six fine legs. Low sand, sparse native
> dune plants and a faint fog-softened horizon only. Strict black, white and
> neutral gray, crisp nineteenth-century scientific engraving with controlled
> crosshatching and stippling, high contrast for e-ink. Keep the complete
> butterfly, both antenna tips, all wing tips, legs, plant sprig and shadow
> inside the central 45% of the wide canvas with at least 18% breathing room;
> outer wings contain only empty sand and faint habitat so a centered 4:3 crop
> preserves all anatomy. One butterfly only; no modern city skyline, no
> specimen pins, no dead animal, no labels, no text, no frame, no watermark,
> no color.

The corrected storefront and first-pass butterfly both passed direct 2:1 and
centred 4:3 inspection. The approved files were normalized to grayscale JPEG
and exported at 1600×800 and 1067×800 without an offset crop.

### Boeing 747 production

> Use case: historical-scene. Asset type: responsive GOODBYE museum exhibit
> image, master intended for both 2:1 and centered 4:3 crops. Create a
> documentary museum illustration of the final Boeing 747 production era: one
> complete unbranded 747-8 freighter standing on the Everett factory apron
> after delivery preparations, viewed from a slightly low front three-quarter
> angle so the unmistakable upper-deck hump, four engines, swept wings, tall
> tail and landing gear are immediately legible. Quiet aircraft factory apron
> with a restrained hangar facade and distant service equipment; no people or
> ceremony. Crisp archival technical engraving with controlled crosshatching,
> coarse halftone and stippling, optimized for e-ink. 2:1 landscape. Keep the
> entire aircraft from nose to tail, both wing tips, all four engines, landing
> gear and shadow inside the central 48% of the canvas with at least 15%
> breathing room. Outer wings contain only empty apron and simple hangar
> architecture so a centered 4:3 crop preserves the complete aircraft.
> Overcast documentary light, dignified final-production mood. Strict black,
> white and neutral gray only. Accurate 747-8 freighter proportions; one
> aircraft only; complete silhouette; no crop. Avoid Boeing wordmark, airline
> livery, logos, readable registration, flags, people, celebration banners,
> caption, border, watermark, color.

The first pass placed the wing tips outside the 4:3 safe area and was rejected.
The approved edit used this correction:

> Use case: precise-object-edit. Asset type: corrected GOODBYE 2:1 master for
> centered 4:3 derivative. Recompose only the supplied monochrome
> final-production 747 factory-apron illustration. Preserve the same aircraft
> type, accurate 747-8 freighter hump and proportions, four engines, landing
> gear, overcast apron, hangar setting, grayscale technical-engraving treatment,
> and empty documentary mood. Scale the complete aircraft down by about 38%
> and center it. The nose, tail, top of vertical stabilizer, both complete wing
> tips, all four engines, all landing gear and the full ground shadow must fit
> inside the middle 48% of the wide 2:1 canvas, with at least 15% breathing room
> on every side. Extend the outer canvas with empty apron and simple hangar
> facade only. Do not crop any part of the aircraft. Change only scale and
> surrounding canvas composition; one aircraft; strict black, white and neutral
> gray. Avoid logos, airline livery, readable registration, flags, people,
> banners, text, caption, border, watermark, color.

### Orkut

> Use case: historical-scene. Asset type: responsive GOODBYE museum exhibit
> image, master intended for both 2:1 and centered 4:3 crops. Create a
> documentary museum still life evoking the Orkut social network at its 2014
> farewell without copying its branding: a complete mid-2000s desktop computer
> on a modest home desk, monitor showing a generic early social-network profile
> page with a large portrait placeholder, a grid of small friend portraits,
> rounded community tiles, scrapbook-note cards, testimonial quotation marks
> and simple connection lines. Quiet domestic computer corner with wired
> keyboard, optical mouse, small webcam, a few printed snapshot photos and an
> old mobile phone; blank wall and desk extend outward. Crisp archival ink
> engraving with controlled crosshatching, coarse halftone and stippling,
> optimized for e-ink. 2:1 landscape. Keep the complete monitor, computer,
> keyboard, mouse, webcam, photos and phone inside the central 46% of the canvas
> with at least 16% breathing room. Outer canvas contains only blank wall and
> desk so a centered 4:3 crop preserves the entire exhibit still life. Soft
> screen glow translated into grayscale, intimate and nostalgic, a social room
> gone quiet. Strict black, white and neutral gray only. Generic interface
> elements must be visually legible but contain no readable words; complete
> objects; no crop. Avoid Orkut name or logo, Google logo, exact trademarked UI,
> readable usernames or messages, real people, color, caption, border,
> watermark.

The first pass left the phone and photographs outside the centered 4:3 crop and
was rejected. The approved edit used this correction:

> Use case: precise-object-edit. Asset type: corrected GOODBYE 2:1 master for
> centered 4:3 derivative. Recompose only the supplied monochrome
> early-social-network computer still life. Preserve the same desktop monitor
> and tower, generic profile/friends/communities/testimonial interface, webcam,
> wired keyboard, mouse, printed snapshots, old mobile phone, engraving style,
> grayscale screen glow and nostalgic mood. Scale the complete still life down
> by about 35% and center it. The entire monitor and webcam, tower, keyboard,
> mouse and mousepad, every printed snapshot, mobile phone, cables, and desk-edge
> shadow must fit inside the middle 47% of the 2:1 canvas with at least 16%
> breathing room. Extend both outer wings with blank wall and empty desk only.
> Do not crop any object. Change only scale and surrounding canvas composition;
> no readable interface text; strict black, white and neutral gray. Avoid Orkut
> name or logo, Google logo, exact trademarked UI, readable usernames or
> messages, real people, color, caption, border, watermark.

Both approved edits passed direct 2:1 and centered 4:3 crop inspection. They
were generated with the built-in image generator, normalized to grayscale
JPEG, and exported at 1600×800 and 1067×800.

### MiniDisc players

> Use case: historical-scene. Asset type: responsive GOODBYE museum exhibit
> image, master intended for both 2:1 and centered 4:3 crops. Create a
> documentary museum still life of the final MiniDisc-player era: one complete
> early-2000s portable MiniDisc recorder/player with its lid open, one
> translucent square MiniDisc cartridge beside it, small wired earphones, and
> a compact tabletop MiniDisc deck behind it. Quiet recording desk with a blank
> wall and a few abstract audio-wave reflections; no people. Crisp archival
> technical engraving with controlled crosshatching, coarse halftone and
> stippling, optimized for e-ink. 2:1 landscape. Keep the complete portable
> player, open lid, disc cartridge, earphones including cable, and tabletop deck
> inside the central 46% of the canvas with at least 17% breathing room on every
> side. Outer wings contain only empty desk and blank wall so a centered 4:3
> crop preserves every object. Soft studio light translated into grayscale;
> tactile, precise, quietly obsolete. Strict black, white and neutral gray only.
> Recognizable MiniDisc proportions and square disc cartridge; complete
> objects; no crop; one portable unit and one deck only. Avoid Sony name,
> MiniDisc wordmark, logos, readable model numbers, readable labels, album art,
> people, color, caption, border, watermark.

The first pass spread the deck and cable beyond the centered crop and was
rejected. The approved edit used this correction:

> Use case: precise-object-edit. Asset type: corrected GOODBYE 2:1 master for
> centered 4:3 derivative. Recompose only the supplied monochrome MiniDisc
> still life. Preserve the same open portable recorder/player, translucent
> square disc cartridge, wired earphones, tabletop deck, blank-wall recording
> desk, technical-engraving treatment, grayscale lighting, and quiet obsolete
> mood. Scale the complete still life down by about 40% and center it. The full
> tabletop deck, portable player and open lid, entire square cartridge, both
> earphones, every cable loop and all object shadows must fit inside the middle
> 45% of the 2:1 canvas with at least 18% breathing room on every side. Extend
> both outer wings with empty desk and blank wall only. Do not crop any object.
> Change only scale and surrounding canvas composition; preserve object design
> and one-player/one-deck count; strict black, white and neutral gray. Avoid
> Sony name, MiniDisc wordmark, logos, readable model numbers, readable labels,
> album art, people, color, caption, border, watermark.

### Falkland Islands wolf

> Use case: scientific-educational. Asset type: responsive GOODBYE
> natural-history exhibit image, master intended for both 2:1 and centered 4:3
> crops. Create a scientifically grounded natural-history illustration of one
> living Falkland Islands wolf or Warrah (`Dusicyon australis`), standing in
> profile with its head turned slightly toward the viewer in windswept Falkland
> tussac grass. A medium-sized foxlike canid with tawny brown-gray coat, paler
> throat and belly, darker back, broad muzzle, small rounded triangular ears,
> bushy tail with pale tip, and historically noted calm alert posture. Low
> treeless island terrain, sparse tussac grass, distant rocky shore, cold cloudy
> horizon; no buildings or people. Crisp nineteenth-century zoological
> engraving with controlled crosshatching and stippling, high contrast for
> e-ink. 2:1 landscape. Keep the entire animal from nose and ear tips through
> all four paws to the full tail, plus its ground shadow and essential grass
> clump, inside the central 43% of the canvas with at least 18% breathing room.
> Outer wings contain only low grass and faint coastline so a centered 4:3 crop
> preserves the complete animal. Overcast South Atlantic light, wary but not
> aggressive, elegiac natural-history plate. Strict black, white and neutral
> gray only. Anatomically coherent canid, one animal only, complete silhouette,
> no crop. Avoid modern domestic dog traits, wolf-pack scene, exaggerated fangs,
> aggression, collar, trap, gun, people, labels, text, frame, border, watermark,
> color.

The first pass made the animal too large for the centered derivative and was
rejected. The approved edit used this correction:

> Use case: precise-object-edit. Asset type: corrected GOODBYE 2:1 master for
> centered 4:3 derivative. Recompose only the supplied monochrome Falkland
> Islands wolf or Warrah natural-history illustration. Preserve the same animal
> anatomy, tawny-gray coat translated into grayscale, calm alert pose,
> windswept tussac habitat, rocky shore, cloudy South Atlantic horizon,
> engraving treatment and elegiac mood. Scale the complete animal down by about
> 42% and center it. The nose, both ear tips, all four complete paws, full bushy
> tail including its pale tip, ground shadow, and the essential grass around
> its feet must fit inside the middle 42% of the 2:1 canvas with at least 19%
> breathing room. Extend both outer wings with low tussac grass, distant shore
> and sky only. Do not crop any part of the animal. Change only scale and
> surrounding landscape composition; one animal; anatomically coherent canid;
> strict black, white and neutral gray. Avoid modern domestic dog traits,
> wolf-pack scene, aggression, collar, trap, gun, people, labels, text, frame,
> border, watermark, color.

Both corrected masters passed direct 2:1 and centered 4:3 crop inspection. They
were generated with the built-in image generator, normalized to grayscale JPEG,
and exported at 1600×800 and 1067×800.

### Reproducible preview dependency

The render workflow pins `trmnl_preview` to 0.14.2, the version used by the
last visually approved production run (37103326782). An unpinned install
resolved to 0.16.0 and produced oversized, clipped X landscape and portrait
previews even for the existing Opportunity Rover exhibit. The pinned control
run (37279120906) restored correct sizing. Treat renderer upgrades as explicit
changes: review all twelve OG/X/X-portrait layouts before updating the pin.
An Actions success alone does not establish that a render looks correct.
For isolated review, point `polling_url` at the immutable commit containing the
fixture, not a moving branch URL: raw branch caching can return an earlier
exhibit. Confirm the exhibit ID in every artifact. Restore the full catalogue
and main polling URL before the final production check.

### Betamax videocassettes

> Use case: historical-scene. Asset type: GOODBYE exhibit master, 2:1
> responsive e-ink artwork. Primary request: Create a historically accurate
> monochrome museum still life representing Sony Betamax videocassettes and
> home video recording from 1975–2016, without branding. Scene/backdrop:
> restrained late-1970s living-room media cabinet and plain wall. Subject: one
> complete early Betamax top-loading VCR, one complete compact Betamax
> videocassette beside it, and a period CRT television showing only abstract
> horizontal recording bands. Style/medium: crisp black-and-white archival
> engraving with realistic mechanical detail, neutral grayscale, high contrast
> suitable for e-ink. Composition/framing: 2:1 landscape. Scale the entire
> group down and keep the VCR, cassette, television, all feet, cables, and
> shadows strictly inside the centered 4:3 safe zone (middle 60% of the wide
> canvas), with at least 15% breathing room inside that safe zone. Outer left
> and right wings contain background and cabinet surface only. Constraints:
> the cassette must be visibly smaller than VHS and mechanically plausible;
> the VCR must read as mid-1970s consumer hardware. No cropped objects. Avoid:
> Sony or Betamax logos, readable labels or screen text, people, VHS cassette,
> DVD, modern flat screen, colour, frame, caption, border, watermark.

The first pass placed the television beyond the centered crop and was rejected.
The approved edit used this correction:

> Use case: precise-object-edit. Asset type: crop-safety correction for a
> GOODBYE 2:1 exhibit master. Primary request: Recompose only the scale and
> placement. Reduce the VCR, Betamax cassette, CRT television, their cables,
> and shadows together by about 40%, and center the complete group. Constraints:
> every meaningful object and cable must fit well inside the middle 50% of the
> canvas width with at least 18% clear breathing room before the centered 4:3
> crop boundary. Outer wings may contain only blank wall and cabinet surface.
> Preserve the exact historical hardware, monochrome engraving appearance,
> lighting, and room. Avoid: adding, deleting, redesigning, or cropping the
> hardware; no logos, text, people, colour, borders, or watermark.

### Mercury automobiles

> Use case: historical-scene. Asset type: GOODBYE exhibit master, 2:1
> responsive e-ink artwork. Primary request: Create a historically accurate
> monochrome museum automobile portrait representing the discontinued Mercury
> marque. Scene/backdrop: quiet late-1960s American dealership forecourt with
> restrained architecture and empty pavement. Subject: one complete unbranded
> 1967 Mercury Cougar two-door hardtop in front three-quarter view, preserving
> its long hood, short deck, concealed headlamp grille, period wheels, roofline,
> and full body silhouette. Style/medium: crisp black-and-white archival
> automotive engraving, realistic proportions, neutral grayscale, high contrast
> suitable for e-ink. Composition/framing: 2:1 landscape. Scale the complete car
> down and keep every part—from front bumper and wheels to roof, rear bumper,
> full shadow, and antenna—strictly inside the centered 4:3 safe zone (middle
> 60% of the wide canvas), with at least 15% breathing room inside that safe
> zone. Outer left and right wings contain only empty forecourt and subdued
> building background. Constraints: one car only; all identifying design
> geometry must remain fully visible in both the wide image and centered 4:3
> crop. Avoid: Mercury, Ford, Cougar or dealership logos; badges; readable signs
> or licence plates; people; other cars; colour; frame; caption; border;
> watermark.

The first pass filled nearly the entire centered crop and was rejected. The
approved edit used this correction:

> Use case: precise-object-edit. Asset type: crop-safety correction for a
> GOODBYE 2:1 exhibit master. Primary request: Recompose only the scale and
> placement. Reduce the complete 1967 Mercury Cougar and its full shadow
> together by about 42%, and center them precisely. Constraints: the whole car,
> antenna, bumpers, wheels, roof, and shadow must fit well inside the middle 48%
> of the canvas width with at least 18% clear breathing room before the centered
> 4:3 crop boundary. Outer wings contain only empty forecourt and subdued
> building. Preserve the exact car design, three-quarter view, monochrome
> engraving appearance, lighting, and background. Avoid: adding, deleting,
> redesigning, or cropping the car; no visible logos, badges, readable signs,
> other vehicles, people, colour, borders, or watermark.

Both corrected masters passed direct 2:1 and centered 4:3 crop inspection. They
were generated with the built-in image generator, normalized to grayscale JPEG,
and exported at 1600×800 and 1067×800.
