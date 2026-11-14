const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const avatar = document.querySelector("#profile-avatar");
const profileAvatarSrc = "assets/profile.jpg";
const closedAvatarSrc = "assets/avatar-eyes-closed.png";
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const copyStatus = document.querySelector(".copy-status");

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";

  avatar.src = isDark ? closedAvatarSrc : profileAvatarSrc;
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
  console.warn("Theme preference could not be read from local storage.", error);
}

const initialTheme = savedTheme === "light" || savedTheme === "dark"
  ? savedTheme
  : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    console.warn("Theme preference could not be saved to local storage.", error);
  }
});

avatar.addEventListener("error", () => {
  if (avatar.getAttribute("src") === closedAvatarSrc) {
    avatar.src = profileAvatarSrc;
    return;
  }
  avatar.hidden = true;
});
avatar.addEventListener("load", () => {
  avatar.hidden = false;
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = button.dataset.copy.includes("@")
        ? "Email address copied."
        : "Phone number copied.";
    } catch (error) {
      copyStatus.textContent = "Copy unavailable. Please select and copy the contact detail.";
      console.warn("Contact detail could not be copied.", error);
    }
  });
});

const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".nav-links > a").forEach((link) => {
      if (link.getAttribute("href") === `#${entry.target.id}`) {
        link.classList.add("active");
        link.setAttribute("aria-current", "location");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach((section) => sectionObserver.observe(section));
