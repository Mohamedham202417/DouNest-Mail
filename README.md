# DouNest Mail

Standalone static frontend for `temp.hmdevelop.me`. The page creates temporary inboxes whose email addresses end in `@mail.hmdevelop.me`; the UI hostname and receiving-email domain are intentionally separate. The service calls the existing DouNest temporary-inbox Worker and Resend receiving domain. The Worker permits the DouNest tools site and the new `temp` UI origin.

## Files

- `index.html`: crawlable Arabic landing page, privacy notice, canonical/OG metadata and structured data.
- `styles.css`: responsive DouNest-inspired visual system based on the supplied `mail.html` design.
- `app.js`: localized inbox UI for the ten DouNest languages; uses session-scoped bearer tokens and renders only plain-text messages.
- `mail-copy.js`: localized service copy shared from DouNest; the email address domain remains `mail.hmdevelop.me`.
- `CNAME`: GitHub Pages custom domain for the web interface (`temp.hmdevelop.me`).

## DNS notes

Configure `temp.hmdevelop.me` as a CNAME to `mohamedham202417.github.io`. Keep the MX, DKIM, and DMARC records on `mail.hmdevelop.me` for Resend. Do not replace the `mail` MX record with a CNAME. After the new site is live, remove the old GitHub Pages A records from the `mail` hostname; this leaves the receiving-email records intact and avoids routing the retired web hostname to GitHub Pages.
