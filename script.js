const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme;

try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch {
  // Theme switching still works when browser storage is unavailable.
}

function applyTheme(theme) {
  const dark = theme === "dark";
  root.dataset.theme = dark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute(
    "aria-label",
    dark ? "Use light theme" : "Use dark theme",
  );
}

applyTheme(
  savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : systemTheme.matches
      ? "dark"
      : "light",
);
toggle.hidden = false;

toggle.addEventListener("click", () => {
  savedTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(savedTheme);
  try {
    localStorage.setItem("portfolio-theme", savedTheme);
  } catch {
    // A session-only preference is fine when storage is unavailable.
  }
});

systemTheme.addEventListener("change", (event) => {
  if (savedTheme !== "dark" && savedTheme !== "light") {
    applyTheme(event.matches ? "dark" : "light");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
