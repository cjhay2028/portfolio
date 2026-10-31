# CJ's portfolio

A responsive, dependency-free portfolio starter built with HTML, CSS, and JavaScript. Includes light and dark themes, accessible navigation, and expandable sample project briefs. No build step, package installation, API keys, or external assets are required.

## Run locally

From the repository root, with Python 3 installed:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open port 8000 in your local browser. Stop the server with Ctrl+C. You can also open `index.html` directly.

## Make it yours

- **Name and introduction:** edit `index.html`, including the page title, description, header, and footer. “CJ” is a starter label based on the GitHub username.
- **Projects:** replace the three clearly labeled sample concepts with real work. Add your own screenshots, project descriptions, and live or source links. The samples do not represent completed projects.
- **About:** replace the starter introduction and interests with your own biography.
- **Contact:** the current link points to `https://github.com/cjhay2028`. Add your preferred contact or social links.
- **Appearance:** edit the color variables at the top of `styles.css`; both themes and mobile layouts are included.
- **Icon:** replace `favicon.svg` with your own mark.

## Checks

```sh
node --check script.js
```

Serve the site and check the home page, navigation anchors, project disclosures, theme switch (including refresh persistence), and narrow-screen layout. No automated application test suite is configured.

## Publish

The files can be hosted by any static website host. For GitHub Pages, go to the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save. Pushing the files does not automatically enable GitHub Pages.

No build command is required; the publish directory is the repository root.
