# Site content and design audit

Reviewed October 24, 2026. All 31 public pages were checked.

Main visible copy; shared five-word sequences across all public pages; area names and weekdays normalized. Shared navigation, forms, footers and scripts excluded.

This percentage is a repeatable editorial diagnostic, not a Google score. Consistent business facts, navigation, form labels and branding should remain consistent. It does not establish factual accuracy of every older article.

Run `python3 scripts/audit-site-content.py` after future content edits.

| Page | Main-copy unique words |
| --- | ---: |
| `about/index.html` | 81.5% |
| `blog/best-dog-parks-hamilton/index.html` | 94.8% |
| `blog/best-doggy-daycares-hamilton/index.html` | 90.6% |
| `blog/dog-friendly-patios-hamilton/index.html` | 92.8% |
| `blog/dog-friendly-waterfalls-hamilton/index.html` | 94.7% |
| `blog/hamilton-animal-shelters-support-local-rescues/index.html` | 97.2% |
| `blog/hamilton-dog-events-calendar/index.html` | 94.9% |
| `blog/hamilton-dog-poop-bylaws/index.html` | 93.9% |
| `blog/hidden-dangers-dog-waste-hamilton-watershed-lake-ontario/index.html` | 94.4% |
| `blog/hiking-the-bruce-trail-with-your-dog/index.html` | 92.8% |
| `blog/index.html` | 72.4% |
| `blog/is-deodorizing-spray-good-for-dogs/index.html` | 99.0% |
| `blog/stoney-creek-parks-puppy-socialization/index.html` | 96.2% |
| `blog/why-clean-up-dog-poop/index.html` | 85.2% |
| `contact/index.html` | 94.0% |
| `faq/index.html` | 89.4% |
| `index.html` | 70.1% |
| `pricing/index.html` | 77.0% |
| `service-areas/ancaster/index.html` | 76.0% |
| `service-areas/dundas/index.html` | 74.7% |
| `service-areas/hamilton-mountain/index.html` | 79.6% |
| `service-areas/index.html` | 80.9% |
| `service-areas/stoney-creek/index.html` | 78.0% |
| `service-areas/waterdown/index.html` | 76.2% |
| `services/bi-weekly-dog-poop-pickup/index.html` | 82.3% |
| `services/commercial-pet-waste-removal/index.html` | 82.6% |
| `services/deodorizing-services/index.html` | 94.0% |
| `services/index.html` | 91.5% |
| `services/one-time-yard-cleanup/index.html` | 84.8% |
| `services/residential-pet-waste-removal/index.html` | 75.1% |
| `services/weekly-dog-poop-pickup/index.html` | 72.4% |

## Changes

- Reworked the homepage, pricing guidance, service directory, weekly visit details and residential onboarding to serve distinct purposes.
- Removed emoji decoration, oversized image placeholders and repeated stock-photo heroes from directories.
- Applied a restrained green and cream palette, a text wordmark, SVG favicon, simpler cards, keyboard focus states and responsive grid rules.
- Kept HTML content visible without JavaScript and removed scroll-triggered content hiding.
- Aligned the homepage prices and calculator starting estimates with the published $25 weekly, $20 bi-weekly and $75 single-cleanup rates.
- Restored four future-dated article publication labels from their original Git creation dates.
- Updated service FAQ schema to match visible answers and refreshed the sitemap.

## SEO follow-up

- Made the authoring template non-indexable in HTML and host headers.
- Replaced missing logo/share image references and removed nonexistent article images from schema.
- Removed unverified audience counts and provisional route weekdays.
- Qualified product claims; treatment suitability now depends on the actual product instructions.
- Replaced dead privacy/terms anchors with privacy-enquiry and service-detail destinations, without inventing legal policies.
- Tightened long search metadata and connected the homepage quote form to Netlify Forms with failure handling.
- Submission tests use mocked responses; a real production enquiry was not sent.
