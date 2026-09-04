# GOODBYE roadmap

## Next

- Rework and test the image-led layouts on TRMNL OG and TRMNL X.
- Decide which entries from [`data/candidates.json`](data/candidates.json) should
  move into the live rotation.
- Build the entry verification workflow described below.

## Entry verification gate

No candidate should move to `data/trmnl.json` until all four reviews are marked
`approved` and the final promotion is explicitly accepted by a human reviewer.

### 1. Fact check

- Verify the subject name, lifespan, final date, status, cause of disappearance,
  and afterlife note.
- Require at least two reputable sources for factual claims, including one
  primary or specialist source whenever possible.
- Prefer company archives for products, museums or operators for transport,
  and museums, conservation bodies, or peer-reviewed work for extinct species.
- Record uncertainty directly. Use `circa`, an asterisk, or a qualified status
  instead of turning a disputed or regional disappearance into a false absolute.
- Record the reviewer, review date, source URLs, and a short evidence note.

### 2. Text review

- Check that the epitaph is memorable without inventing facts.
- Check that `why` and `afterlife` are supported by the cited evidence.
- Avoid misleading claims such as “gone” when examples survive in museums,
  private collections, another country, or a small active niche.
- Check spelling, tone, repetition, and the layout character limits.
- Mark generated or interpretive wording separately from factual wording.

### 3. Image review

- Verify that the image depicts the correct model, species, era, and physical
  details; do not rely on visual plausibility alone.
- Record the creator, source URL, licence, attribution requirements, and any
  edits or AI generation.
- For generated illustrations, label them as illustrations and compare their
  identifying features against authoritative references.
- Test crop, contrast, dithering, and readability in every layout on both OG
  and X before approval.
- Reject misleading logos, anachronisms, invented details, broken URLs, and
  images without clear reuse rights.

### 4. Final approval and promotion

- Require `fact_check`, `text_review`, and `image_review` to be `approved`.
- Give the completed museum card one final human review in rendered previews.
- Copy the approved entry into `data/trmnl.json`; do not display candidates
  directly from the candidate file.
- Preserve the review record so later corrections can be traced.

## Planned automation

- Add a JSON-schema validator for candidates and review records.
- Detect duplicate IDs, exhibit numbers, subjects, and source URLs.
- Enforce text limits, allowed categories, valid statuses, and HTTPS links.
- Check that cited pages and image files still resolve.
- Validate image dimensions, file size, licence metadata, and required credit.
- Generate OG and X review previews for every candidate awaiting approval.
- Block promotion when any review is missing, rejected, or stale.

## Later

- Expand the curated archive without sacrificing source quality.
- Consider an optional anniversary mode after the catalogue is large enough.
- Consider additional categories only when enough high-quality entries justify
  them.
- Add a public archive page for previous farewells.
