# DouNest Mail

Standalone static frontend for `mail.hmdevelop.me`. The service calls the existing DouNest temporary-inbox Worker and Resend receiving domain; the Worker allows requests only from the two DouNest web origins.

## Files

- `index.html`: crawlable Arabic landing page, privacy notice, canonical/OG metadata and structured data.
- `styles.css`: responsive DouNest-inspired visual system based on the supplied `mail.html` design.
- `app.js`: localized inbox UI for the ten DouNest languages; uses session-scoped bearer tokens and renders only plain-text messages.
- `mail-copy.js`: localized service copy shared from DouNest.
- `CNAME`: GitHub Pages custom domain.

The email domain's existing MX and TXT records must remain intact. GitHub Pages ordinarily asks for a CNAME on subdomains, but that would conflict with MX at the same hostname. The current Namecheap setup therefore requires testing a GitHub Pages A-record mapping while retaining MX; do not replace MX with CNAME.
