const fs = require("fs")
const path = require("path")

// Use the current working directory to find the public folder
const publicDir = path.join(process.cwd(), "public")
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Tech Stack SVGs with simpler, more reliable SVGs
const techStack = [
    {
      name: "js-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="#F7DF1E"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="black" font-weight="bold" text-anchor="middle" dy=".3em">JS</text>
      </svg>`,
    },
    {
      name: "html5-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#E34F26" d="M6,42L3,6h42l-3,36L24,46"/>
        <path fill="#EF652A" d="M24,43l12.3-3.4l2.5-28H24"/>
        <path fill="#FFF" d="M24,21h-6l-0.4-4H24V13H12l1.2,13H24V21z M24,34l-5-1.4L18.6,29h-4.1l0.8,9L24,41"/>
      </svg>`,
    },
    {
      name: "css3-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#1572B6" d="M6,42L3,6h42l-3,36L24,46"/>
        <path fill="#33A9DC" d="M24,43l12.3-3.4l2.5-28H24"/>
        <path fill="#FFF" d="M24,21h-6l-0.4-4H24V13H12l1.2,13H24V21z M24,34l-5-1.4L18.6,29h-4.1l0.8,9L24,41"/>
      </svg>`,
    },
    {
      name: "react-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <circle fill="#61DAFB" cx="24" cy="24" r="5"/>
        <g fill="none" stroke="#61DAFB" stroke-width="3">
          <ellipse rx="15" ry="6" transform="rotate(60 24 24)" cx="24" cy="24"/>
          <ellipse rx="15" ry="6" transform="rotate(-60 24 24)" cx="24" cy="24"/>
          <ellipse rx="15" ry="6" transform="rotate(0 24 24)" cx="24" cy="24"/>
        </g>
      </svg>`,
    },
    {
        name: "python-logo",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="#3776AB" d="M24,4c-4.9,0-9,4-9,9v6h18v-6C33,8,28.9,4,24,4z"/>
          <circle fill="#FFD43B" cx="30" cy="10" r="2"/>
          <path fill="#FFD43B" d="M24,44c4.9,0,9-4,9-9v-6H15v6C15,40,19.1,44,24,44z"/>
          <circle fill="#3776AB" cx="18" cy="38" r="2"/>
          <path fill="#3776AB" d="M33 24c0 1.1-0.9 2-2 2h-14c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h3v-2c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3v2h3c1.1 0 2 0.9 2 2V24z"/>
          <path fill="#FFD43B" d="M15 24c0-1.1 0.9-2 2-2h14c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-3v2c0 1.7-1.3 3-3 3h-3c-1.7 0-3-1.3-3-3v-2h-3c-1.1 0-2-0.9-2-2V24z"/>
        </svg>`,
      },
    {
      name: "r-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#276DC3"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" font-weight="bold" text-anchor="middle" dy=".3em">R</text>
      </svg>`,
    },
    {
      name: "tableau-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="#E97627"/>
        <g fill="white">
          <circle cx="12" cy="12" r="2"/>
          <circle cx="36" cy="12" r="2"/>
          <circle cx="12" cy="36" r="2"/>
          <circle cx="36" cy="36" r="2"/>
          <circle cx="24" cy="24" r="3"/>
        </g>
      </svg>`,
    },
    {
      name: "sql-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#4479A1"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" font-weight="bold" text-anchor="middle" dy=".3em">SQL</text>
      </svg>`,
    },
    {
      name: "mongodb-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <circle fill="#4CAF50" cx="24" cy="24" r="20"/>
        <path fill="white" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"/>
      </svg>`,
    },
    {
      name: "neo4j-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <circle fill="#00897B" cx="24" cy="24" r="20"/>
        <circle fill="white" cx="24" cy="24" r="10"/>
      </svg>`,
    },
    {
      name: "nextjs-logo",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>`,
    },
  ];
  

// Generate SVGs
techStack.forEach(({ name, svg }) => {
  try {
    fs.writeFileSync(path.join(publicDir, `${name}.svg`), svg)
    console.log(`Generated ${name}.svg successfully`)
  } catch (error) {
    console.error(`Error generating ${name}.svg:`, error)
  }
})

// Generate a simple placeholder SVG
const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#f0f0f0"/>
  <text x="50" y="50" font-family="Arial" font-size="12" fill="#333" text-anchor="middle" dy=".3em">Placeholder</text>
</svg>`

try {
  fs.writeFileSync(path.join(publicDir, "placeholder.svg"), placeholderSvg)
  console.log("Generated placeholder.svg successfully")
} catch (error) {
  console.error("Error generating placeholder.svg:", error)
}

console.log("SVG generation complete!")

