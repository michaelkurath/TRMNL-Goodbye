# Woolworths UK stores and Xerces blue butterfly review

## Promotion decisions

- **Woolworths UK stores (052)** — promoted at 23/25. RTÉ records 807 UK
  outlets and the final 200-store closure deadline of 6 January 2009.
- **Xerces blue butterfly (053)** — promoted at 22/25. The California Academy
  of Sciences identifies human-driven dune-habitat loss and the butterfly's
  disappearance from San Francisco in 1943.

The promotions bring the live catalogue to 53 entries.

## Sources checked

- Woolworths closure: <https://www.rte.ie/news/2009/0103/112254-woolworths/>
- Xerces blue extinction: <https://www.calacademy.org/press/releases/california-academy-of-sciences-and-presidio-trust-repopulate-sand-dunes-with-relative>
- Xerces final specimens: <https://www.calacademy.org/blogs/project-lab/extinction-is-forever-gone-but-not-forgotten>

## New candidates

- **Boeing 747 production run — 23/25:** recognition 5, visual strength 5,
  story strength 4, endpoint clarity 5, catalogue fit 4. Boeing delivered the
  1,574th and final new 747 on 31 January 2023; the entry explicitly states
  that existing aircraft remain in service.
- **Orkut — 21/25:** recognition 4, visual strength 4, story strength 4,
  endpoint clarity 5, catalogue fit 4. The archived first-party Orkut Blog
  announcement records its ten-year run and 30 September 2014 endpoint.

Candidate sources:

- <https://boeing.mediaroom.com/2023-01-31-Boeing%2C-Atlas-Air-Celebrate-Delivery-of-Final-747%2C-an-Airplane-that-Transformed-Aviation-and-Global-Air-Travel>
- <https://web.archive.org/web/20140630142637/http://en.blog.orkut.com/2014/06/tchau-orkut.html>

## Visual review

The first Woolworths generation was rejected because its shopfront extended
beyond the centred 4:3 safe zone. The approved edit scaled the complete façade
down and added neutral brick wings. Both outer jambs, windows, entrance,
fascia, shutters, and threshold remain intact in the centred derivative.

The first OG quadrant render was also rejected because the long display title
collided with the epitaph. The catalogue display title was tightened from
`WOOLWORTHS UK STORES` to `WOOLWORTHS UK`; the exhibit subject, ID, source,
copy, and artwork are unchanged.

The first-pass Xerces master passed direct 2:1 and centred 4:3 inspection. All
four wing tips, antennae, legs, body, and deerweed sprig remain complete.

## CI and render evidence

- **Woolworths UK:** approved in all 12 OG, TRMNL X landscape, and TRMNL X
  portrait layouts in Actions run
  [36828424888](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36828424888),
  artifact `11146650565`.
- **Xerces blue butterfly:** approved in all 12 corresponding layouts in
  Actions run
  [36828694557](https://github.com/michaelkurath/TRMNL-Goodbye/actions/runs/36828694557),
  artifact `11146885150`.

Temporary fixture commits used branch polling and image URLs so Actions could
retrieve unmerged assets. The final commit restores the complete 53-entry
production catalogue and permanent `main` URLs. Its CI run is recorded after
the final gate passes.
