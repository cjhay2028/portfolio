# CJ Haydon — portfolio

A static, aviation-focused portfolio built with HTML, CSS, and JavaScript. No dependencies, build step, API keys, or external fonts are required. Pages work without JavaScript; JavaScript adds a persistent light/dark theme preference.

## Run locally

From the repository root:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open port 8000 in your local browser. Stop the server with Ctrl+C.

## Pages

- `index.html`: home, experience categories, and an about introduction.
- `about.html`: personal overview.
- `aviation.html`: aviation focus and FAA Part 107 / Student Pilot credentials.
- `uas.html`: pinned Google Sheets logbook, MakeFlyEasy Believer build first, sophomore flight labs second.
- `photography.html`: photography collection landing page.
- `experience.html`: customer service and other work experience.
- `resume.html`: curated resume overview, without embedding a resume document.

Navigation and footers are included directly in each HTML page so they work without JavaScript or a build step. Update all seven pages when changing shared navigation. Colors and responsive layouts live in `styles.css`.

## Content and media

Content currently uses only the details CJ supplied in the project brief. Employer names, job dates, flight hours, and additional qualifications have not been invented. Resume and LinkedIn details still need to be supplied before expanding the biography and work history. Do not publish personal addresses, certificate numbers, or a resume document without an explicit request.

The Believer and flight lab projects are real project descriptions supplied by CJ. `assets/fixed-wing.svg` is a decorative aircraft illustration, explicitly labeled as such; it is not a photograph or an exact Believer diagram. Actual build photos, flight lab photos/video, and photography selections are still pending. The linked Superhuman/Coda build journal could not be retrieved from the setup environment because its network policy blocked the domain. CJ confirmed the fourth aircraft is a Skydio 2+. The LinkedIn source is https://www.linkedin.com/in/christopherjhaydon.

Put approved images in `assets/`, use descriptive filenames and meaningful alt text, preserve their proportions, and caption only what is verified. Add the build photos to the first project and flight lab images/video to the second. Do not substitute stock images for project evidence. Keep the logbook above the UAS introduction.

## Validation

```sh
node --check script.js
```

Serve and check every page, navigation, project anchors, pinned logbook and build-journal links, light/dark preference across pages, keyboard navigation, and layouts at narrow and wide widths. No application test suite is configured.

## Hosting

GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/ (root)`. The site is intended for `https://cjhay2028.github.io/portfolio/`. All internal assets and links use relative paths so project-site hosting works. No build command is needed. Pushing updates to the configured publishing branch triggers GitHub Pages; verify deployment status separately.
