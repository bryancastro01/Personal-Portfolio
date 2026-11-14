# John Bryan Castro — Personal Portfolio

A responsive personal portfolio for **John Bryan Castro**, an Information Technology student and aspiring full-stack web developer. Built with semantic HTML5, CSS3, and vanilla JavaScript—no framework or build step required.

The visual direction is a cyber-tech interface: dark layered panels, a fine technical grid, electric cyan and violet accents, HUD-style labels, and scanline details around the profile portrait.

## Features

- Responsive layout with mobile hamburger navigation and smooth section scrolling
- Accessible light/dark theme toggle, saved in `localStorage`
- Hero portrait uses your profile photo, with an optional alternate closed-eye portrait for dark mode
- About, education, skills, projects, certifications, and contact sections
- CSS-drawn project artwork and certificate placeholders, ready to replace
- Copy-to-clipboard controls for email and phone
- Direct email, phone, and GitHub links
- Reduced-motion support and keyboard skip link
- Cyber-tech visual design with responsive project panels and subtle HUD details

## Project structure

```text
personal-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── README.md
```

## Personalize the assets

1. Your profile photo is `assets/profile.jpg`. Add `avatar-eyes-closed.png` to `assets/` if you want a separate portrait in dark mode; otherwise your profile photo is used in both themes.
2. Certificate images are stored in `assets/` and referenced by the cards in `index.html`.
3. Replace the CSS-made project art with screenshots if desired.
4. Update the project GitHub links and `#contact` demo placeholders in `index.html` to point to each project's actual repository and deployed demo.

The hero displays a styled initials placeholder if the profile photo is unavailable. Project visuals remain CSS-made placeholders until you add project screenshots.

## Run locally

Open `index.html` directly in a browser, or start a local static server from the project directory, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

### GitHub

Create a public repository named `personal-portfolio`, add these files, and push the project to the repository. No build command or generated output directory is needed.

### Vercel

Import the GitHub repository into Vercel and select **Other** as the framework preset (or leave the framework preset unset). Leave the build command empty and set the output directory to `.`. Vercel will serve `index.html` as a static site.

## Tech stack

- HTML5
- CSS3 (custom properties, responsive layouts, and CSS illustrations)
- Vanilla JavaScript (theme persistence, avatar swap, mobile navigation, copy controls, and active-section navigation)

## Contact

- **Email:** [johnbryancastro12@gmail.com](mailto:johnbryancastro12@gmail.com)
- **Phone:** [09297990129](tel:+639297990129)
- **GitHub:** [bryancastro01](https://github.com/bryancastro01)
