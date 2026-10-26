# The Argos Catalogue image update — 26 October 2026

Created with OpenAI’s built-in image generator, not the API/CLI fallback.

## Generation prompt

> Use case: historical-scene. Asset type: GOODBYE responsive e-ink museum illustration. Original high-contrast monochrome museum engraving of the retired main Argos paper shopping catalogue: a very thick open softcover general-merchandise catalogue on a modest British home kitchen table, densely arranged small grayscale product pictures (toys, kettle, camera, sofa) in tidy page grids, a short pencil resting beside a paper order slip with abstract ruled boxes. A second closed thick volume beneath it. Oblique overhead view. The complete books, pencil and slip must fit entirely inside the central 4:3 safe area of a wide 2:1 canvas, with 15 percent breathing room; background table only at left/right edges. Recognizable as a late twentieth-century retail catalogue, not an encyclopedia or glossy fashion magazine. Subtle page wear and circled product images, no readable text or numbers, no logos or trademarks, no people or hands, no watermarks, borders, digital devices, festive decorations or archival-photo claim. Crisp black ink, broad white/grayscale separation, restrained crosshatching, no pre-dithering.

## Correction prompt

> Recompose this same monochrome catalogue engraving with the complete open book, lower book, whole pencil and entire order slip contained between x=350 and x=1250 on a 1600x800 wide 2:1 canvas, with at least 80 pixels blank tabletop above and below. Zoom out substantially: the entire arrangement must occupy at most 55% of canvas width. Outer left and right wings are ONLY empty pale tabletop, NOT objects. Preserve the product grids, circled products, old thick softcover catalogue identity and pencil. No readable text, no logos, no frame, no added objects. This must survive a centered 1067x800 crop without cutting any book corner, pencil tip or slip edge.

## Further safe-zone correction

> Zoom OUT by another 40 percent while preserving this exact catalogue, lower book, slip and pencil arrangement. Make the WHOLE arrangement visibly small in the center: it must fit in the middle HALF of the canvas width, leaving an empty tabletop margin of at least ONE QUARTER OF THE IMAGE WIDTH on BOTH left AND right. No object may extend into those margins. Keep every edge and pencil tip. Same monochrome illustration, wide 2:1 canvas, no added objects or text.

## Production exports

- `assets/exhibits/responsive-v2/argos-catalogue-master-2x1.jpg`: 1600×800 grayscale JPEG, quality 88.
- `assets/exhibits/responsive-v2/argos-catalogue-standard-4x3.jpg`: 1067×800 grayscale JPEG, quality 88.

The standard is a centered crop of the wide master. Two recompositions moved all books, slip and pencil into the safe zone. No crop offset was used.

Sainsbury’s corporate statement and Printweek confirm the main catalogue’s 2020 end, distinct from the continuing retailer and separate Christmas Gift Guide. The original laminated-wish-book wording was removed to avoid confusing take-home books with store copies.

All imagery is interpretive, not archival photography or exact technical evidence. The corrected source passed direct wide/standard inspection. Hosted OG/X landscape/X portrait reviews are mandatory before merge.
