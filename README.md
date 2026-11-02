# CJ Haydon — portfolio

A static, aviation-focused portfolio built with HTML, CSS, and JavaScript. No dependencies, build step, API keys, or external fonts are required. Pages work without JavaScript; JavaScript adds a persistent light/dark theme preference.

## Run locally

From the repository root:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open port 8000 in your local browser. Stop the server with Ctrl+C.

## Pages

- `index.html`: aviation and teaching leadership highlights, hands-on project links, and an about introduction.
- `about.html`: personal overview.
- `aviation.html`: Purdue UAS teaching, dispatch, ambassadorship, Aviation Day leadership, aerial business experience, and FAA credentials, with an opening Focus section.
- `uas.html`: pinned Google Sheets logbook, MakeFlyEasy Believer build first, sophomore flight labs second.
- `photography.html`: New Perspectives Aerial Photography, exhibition/outreach background, and a seven-photo aerial gallery.
- `experience.html`: non-aviation work at Lake Bluff Park District, Chick-fil-A, Ravinia, The Fresh Market, and CJ’s Landscaping.

Navigation and footers are included directly in each HTML page so they work without JavaScript or a build step. Update all six pages when changing shared navigation. The blue light/dark color palette and responsive layouts live in `styles.css`. Gallery images open at their full supplied resolution; below-the-fold images load lazily.

## Content and media

Experience content is curated from the LinkedIn screenshots CJ supplied in the conversation, along with the earlier project brief. Dates and responsibilities are taken from those screenshots; current Purdue roles are listed as Present as supplied. No flight hours, degree status, job achievements, or additional qualifications have been invented. The homepage prioritizes aviation operations and leadership; non-aviation employment has its own page. Do not publish personal addresses, certificate numbers, or a resume document without an explicit request.

The Believer and flight lab projects are real project descriptions supplied by CJ. Five original Believer build photos supplied by CJ are in `assets/believer/` and displayed in the first UAS project. They cover the airframe, wiring workbench, connector detail, fuselage interior, and components. Image files and their proportions are preserved, with links to the full supplied images. Four original flight lab photos supplied by CJ are in `assets/flight-labs/` and displayed in the second UAS project. They show a field setup, a drone on the lab workbench, a thermal camera view, and flight field equipment. The promotional video is still pending. Seven photography images supplied by CJ are included in `assets/photography/`, preserving the original image files and proportions. The fourth supplied photo, `garden-geometry.jpg`, is featured on the homepage and also appears in the gallery. Gallery titles are descriptive labels, not claims about locations or original artwork titles. The linked Superhuman/Coda build journal could not be retrieved from the setup environment because its network policy blocked the domain. CJ confirmed the fourth aircraft is a Skydio 2+. The LinkedIn source is https://www.linkedin.com/in/christopherjhaydon.

Put approved images in `assets/`, use descriptive filenames and meaningful alt text, preserve their proportions, and caption only what is verified. Keep Believer build photos in the first project and flight lab photos/video in the second. Do not substitute stock images for project evidence. Keep the logbook above the UAS introduction.

## Validation

```sh
node --check script.js
```

Serve and check every page, navigation, project anchors, pinned logbook and build-journal links, light/dark preference across pages, keyboard navigation, and layouts at narrow and wide widths. No application test suite is configured.

## Hosting

GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/ (root)`. The site is intended for `https://cjhay2028.github.io/portfolio/`. All internal assets and links use relative paths so project-site hosting works. No build command is needed. Pushing updates to the configured publishing branch triggers GitHub Pages; verify deployment status separately.
