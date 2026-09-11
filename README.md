# Sanghabodhi College Nittambuwa — Media Unit Portfolio

## Files
- `index.html` — main portfolio page
- `style.css` — responsive white/minimal visual system and animations
- `script.js` — navigation, scroll reveal, cursor glow and enquiry form
- `assets/` — place the real Media Unit logo and photographs here

## Quick setup
1. Put the three files in the same folder.
2. Open `index.html` in a browser.
3. Replace every `ADD PHOTO` / `PHOTO` placeholder with the unit's real photos.
4. Replace the two `ADD LOGO` / `MEDIA LOGO` areas with the official Media Unit logo.
5. In `script.js`, replace:
   `mediaunit@sanghabodhi.example`
   with the real official email address.

## Enquiry form
The visual system is modeled on the screenshot: name + email + project/enquiry fields and a strong `SEND MESSAGE` button.
It currently uses `mailto:` so it can open the visitor's email application without requiring a server.
For production, connect Formspree, EmailJS, a PHP endpoint, or another backend.

## Publishing
This is plain HTML/CSS/JS, so it can be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any normal static host.
