# 🌙 Midnight Shelf

**A private fic tracker. No account. No server. Your reading history stays on your device.**

Midnight Shelf is a single-file web app for keeping track of the fanfiction and web novels you read — across AO3, Wattpad, FFN, or anywhere else. Save the title, author, ship, tags, the link back to the fic, and a few honest words about how it wrecked you. Months later, search by ship or trope and find your way back.

## Why another tracker?

Because your bookmarks are scattered across five sites, your spreadsheet is a wall of text, and some of what you read is nobody's business. Midnight Shelf is deliberately boring about privacy:

- **No sign-up.** Open the page, start shelving.
- **No server.** There is no backend. Your data never leaves your device.
- **Yours to keep.** Everything lives in your browser, plus an optional local JSON "shelf file" that auto-saves on every change.

## Features

- Track title, author, ship/characters, link, status (Reading / Finished / Dropped), star rating
- Tap-to-select trope tags (Slow Burn, Enemies to Lovers, Hurt/Comfort, Omegaverse…) plus your own custom tags
- Paste in the fic's summary so future-you remembers what it was about
- Search everything: title, author, ship, tags, summary, notes, even the link
- Tap any tag on a card to instantly filter by it
- "Continue reading" link on in-progress fics; "Revisit" on finished ones
- **Shelf file**: link a local JSON file once, and every save writes to it automatically (Chrome/Edge). Put it in a synced folder (Dropbox, OneDrive…) and you've got your own private cloud backup.
- Export / import JSON backup as a fallback that works in every browser

## One-tap shelving

Reading a fic on AO3, Wattpad, or anywhere else? One tap shelves it — no copy-pasting titles and links. Your shelf opens with the title, link and author pre-filled and status set to Reading; if the fic is already shelved (same link), that entry opens for editing instead of creating a duplicate.

**Desktop**: open your deployed shelf → footer **🔖 One-tap bookmarklet** → drag the "🌙 Shelve this fic" button onto your bookmarks bar. Click it on any fic page.

**Android (recommended)**: open the shelf in Chrome/Edge → browser menu → "Add to Home screen" / "Install app". The shelf then appears in the system share sheet — while reading in any app, tap Share → Midnight Shelf.

**iPhone**: iOS doesn't support the share-target install, so either use the bookmark trick (steps in the footer panel, works in Safari), or build a Shortcut: new Shortcut named "Shelve this fic" → enable "Show in Share Sheet" (accepts Safari web pages / URLs) → actions: Get URLs from Input → URL Encode → Text (`https://your-shelf-domain/?add=1&url=` + the encoded variable) → Open URL. The link arrives automatically; type the title yourself.

The bookmarklet is generated from your own shelf's address, so it works on any domain. A few sites with strict security policies block all bookmarklets — on those, add manually.

## How your data is stored

1. **Browser storage** — always on. Survives refreshes and restarts. Cleared only if you wipe site data.
2. **Shelf file** (optional, recommended) — a local JSON file that mirrors your shelf on every save, via the File System Access API. One click to reconnect next visit.
3. **Manual export/import** — plain JSON download, works everywhere including mobile.

## Run it yourself

It's one HTML file. Host it anywhere that serves static files:

**Cloudflare Pages (what this repo is set up for):**
1. Fork or clone this repo
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo
3. Build settings: no framework, no build command, output directory `/`
4. Done — every push auto-deploys

Or skip Git entirely: `npx wrangler pages deploy . --project-name=midnight-shelf`

Note: the shelf-file feature needs a secure context (https), so it works when deployed but not when opening the file directly from disk. Everything else works either way.

## Privacy

There is nothing to disclose because nothing is collected. No analytics, no cookies, no requests to any server after the page loads. Read the source — it's one file.

## License

MIT
