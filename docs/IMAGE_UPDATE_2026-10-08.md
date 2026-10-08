
## kepler-space-telescope — 8 October 2026

Generated using the built-in imagegen tool. Production files: `assets/exhibits/responsive-v2/kepler-space-telescope-master-2x1.jpg` (1600×800) and `kepler-space-telescope-standard-4x3.jpg` (1067×800). Normalize to grayscale, then take the centered 4:3 crop; no offset crop.

Full generation prompt:

> Use case: historical-scene. Asset: GOODBYE museum exhibit. Create a 2:1 wide monochrome engraved illustration of NASA's Kepler space telescope floating in deep space. Show its cylindrical photometer telescope body with a large dark circular aperture at the top, metallic insulated lower spacecraft bus, and ONE fixed rectangular solar-array panel along one side (not two wing arrays, not Hubble). Three-quarter view, accurate compact Kepler silhouette. Entire telescope including aperture and rectangular array occupies only the centered middle 50% of width, comfortably inside a centered 4:3 crop, with 15% vertical breathing room. Quiet stars in outer wings. Crisp black ink crosshatching and clear silhouette for e-ink. No text, branding, NASA insignia, watermark, border, planets, rockets, captions, or colour.

The approved composition retains the complete identifying subject in the centered crop. Artwork is interpretive, not a documentary photograph.

The TRMNL workflow now runs on collection branches before PR creation and pins the newest exhibit to local artwork. Review full, half horizontal, half vertical and quadrant on OG, X landscape and X portrait. Keep fixture mutations disposable; production catalogue must remain intact.


OG Full initially cropped the tall telescope with cover mode. Kepler sets optional `image_fit: contain`; Full uses the framework image mode, defaulting to cover for existing exhibits. This preserves the whole silhouette without changing older entries. Device review must be rerun after this correction.

Device review approved on 8 October 2026: all twelve OG/X landscape/X portrait layouts inspected; grayscale exports and centered crops passed. Workflow evidence is linked in the promotion record.
