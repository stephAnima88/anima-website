# Launch checklist: Anima website

Plan: host the site free on **GitHub Pages**, keep DNS where it is (Squarespace Domains,
formerly Google Domains), keep email on Google Workspace untouched.

Status key: [you] = a step only you can do. [me] = Claude does it, but only after your yes at that moment.

## 1. Before anything goes live
- [ ] [you] Confirm the exact legal name from your CIPC certificate (I used "Anima Business Consulting (Pty) Ltd").
- [ ] [you] Confirm the other items in the chat: naming clients, wording for Dark Matter / Yellow Ball, VAT number off the site, phone and address published.
- [ ] [you] Send design's logo files (SVG) to `brand/new/`. [me] swap it in on its own branch.
- [ ] [me] Merge the site to `main`.

## 2. Look at DNS first (read-only, changes nothing)
- [ ] [you] Log in at domains.squarespace.com, open `animabusinessconsulting.net`, go to DNS settings.
- [ ] [you] Take screenshots of every existing record and keep them. This is your undo.
- [ ] [you] Check the nameservers are the default Squarespace ones. If they point to some other provider, stop and tell me: the steps in section 4 change.
- [ ] [you] You should see MX records (and TXT records for SPF/DKIM) that make Google email work. **Never edit or delete these.**

## 3. Publish the code on GitHub
- [ ] [you] Say yes to: create a public repository `anima-website` under your GitHub account and push `main`.
      (Public is required for free Pages. Nothing secret is in it. The address and registration number are already on the site.)
- [ ] [me] Create the repo, push, then in Settings > Pages choose "Deploy from branch", branch `main`, folder `/ (root)`.
- [ ] [me] Add the custom domain `animabusinessconsulting.net` in the same Pages settings.

## 4. Point the domain at the site (the only DNS change)
In Squarespace DNS, add these. Only these:
- [ ] [you] Four **A** records for host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
      (check against GitHub's current "Managing a custom domain" page before you type them).
- [ ] [you] One **CNAME** record: host `www`, value `<your-github-username>.github.io`.
- [ ] [you] If Squarespace already has A/AAAA/CNAME records for `@` or `www` pointing at a parking or website-builder page, delete only those, not MX or TXT.
- [ ] [you] Do not change nameservers. Do not touch MX or TXT records.

## 5. Switch on HTTPS and test
- [ ] [you] Wait up to an hour. In GitHub > Settings > Pages the DNS check should go green.
- [ ] [you] Tick "Enforce HTTPS".
- [ ] [you] Open `https://animabusinessconsulting.net` and `https://www.animabusinessconsulting.net` on your phone and laptop.
- [ ] [you] **Test email straight away:** send a message from an outside address (e.g. Gmail) to `info@` and to `developer@`, and send one out. If anything is wrong, restore the MX records from your screenshots.
- [ ] [you] Optional hardening: GitHub > your profile settings > Pages > "Add a domain" to verify ownership. It adds one TXT record, which is safe.

## 6. Apple
- [ ] [you] Wait for the D-U-N-S number. Check the name and address on the D-U-N-S record match CIPC and the site footer exactly. Tell me if they differ and I will match the footer.
- [ ] [you] Enrol as an organisation with `developer@animabusinessconsulting.net` (dedicated Apple ID, two-factor on). Website: `https://animabusinessconsulting.net`.
- [ ] [you] Be ready for Apple to phone or email to verify that you can sign for the company. The business number is on the Contact page.
- [ ] [you] In App Store Connect, set:
  - Support URL: `https://animabusinessconsulting.net/apps/block-pop/support/`
  - Privacy Policy URL: `https://animabusinessconsulting.net/apps/block-pop/privacy/`
- [ ] [you] Update the Block Pop listing copyright line and bundle ID if you want them to carry the company name (the listing draft still says `com.stephansmit.blockpop` and `[your name]`).

## Later
- Family Tracker gets its own folder, `apps/family-tracker/`, with support and privacy pages, the same way as Block Pop.
- Every change after launch: edit, commit, push `main`, and the site updates by itself within a minute or two.
