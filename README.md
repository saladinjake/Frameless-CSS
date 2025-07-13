## Frameless CSS
Frameless CSS is a lightweight, token-based, utility-first CSS framework inspired by Tailwind CSS — designed to give you complete control over your UI without the bloat of component libraries or JavaScript dependencies.

It is mobile-first, scalable, and framework-agnostic — perfect for clean HTML, React, Vue, or any modern front-end stack where performance, design clarity, and layout flexibility are top priorities.

##🚀 Why Frameless CSS?
Frameless CSS was born out of a need for:

Minimalist, scalable utility classes

Mobile-first responsiveness

Full design token control (colors, spacing, radii, font sizes)

Consistent layout patterns (grid, flexbox, spacing)

No JS, no opinionated components — just powerful CSS primitives

Use it like Tailwind — but with your own design tokens, naming conventions, and just what you need.

## 🧱 Core Principles
🧩 Utility-first: Each class does one thing well

📱 Mobile-first: Scale naturally using responsive breakpoints

🎨 Design-token driven: All spacing, colors, fonts controlled via variables

💨 No JavaScript: Pure CSS, works with any frontend

📦 Atomic and extendable: Build your UI from scratch or layer it with components

## ✨ Features
✅ Utility classes for layout, spacing, sizing, typography, colors, borders, shadows
✅ Custom design tokens via CSS variables
✅ Responsive system (sm, md, lg, xl)
✅ Semantic naming patterns
✅ Works with pure HTML or any JS framework
✅ CSS-only: no dependencies, no build step required (but PostCSS optional)

## 📁 File Structure
````frameless-css/
├── dist/
│ └── frameless.css # Compiled main CSS file
├── src/
│ ├── base.css # Base resets and typography
│ ├── tokens.css # Design tokens (colors, spacing, etc)
│ └── utilities/
│ ├── layout.css # Flex, grid, display
│ ├── spacing.css # Margin, padding
│ ├── typography.css # Font sizes, weights
│ ├── color.css # Text/bg colors
│ ├── border.css # Border radius, border width
│ ├── effects.css # Shadow, transitions
│ └── responsive.css # Media query utilities
├── README.md
└── package.json (optional)
````
## 🔧 Installation
Option 1: CDN (ideal for prototyping)
````
<link rel="stylesheet" href="https://cdn.yoursite.com/frameless.min.css" />
Option 2: Manual

Copy frameless.css into your project:

<link rel="stylesheet" href="/css/frameless.css" />
Option 3: NPM (if using build tools)

npm install frameless-css

Then import in your global CSS:
@import "frameless-css/dist/frameless.css";
````
## 🎨 Design Tokens
Defined in src/tokens.css:
````
:root {
--primary: #16a34a;
--primary-light: #d1fae5;
--gray-50: #f9fafb;
--gray-500: #6b7280;
--gray-900: #111827;

--font-base: 'Inter', sans-serif;
--radius: 0.75rem;
--shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
}
````
## 📏 Responsive Breakpoints
Defined in responsive.css:
````
sm: 640px

md: 768px

lg: 1024px

xl: 1280px

#### Usage:
 
````
<div class="p-2 md:p-4 lg:p-6">
📚 Usage Examples
Layout with Flex & Grid:
<div class="flex justify-between items-center"> <div class="w-1/2 p-2">Left</div> <div class="w-1/2 p-2">Right</div> </div>
Responsive Typography:

<h1 class="text-lg md:text-xl lg:text-2xl font-bold">Sample</h1>
Buttons:

<button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"> </button>
Card:

<div class="rounded shadow p-4 bg-white">
🧩 Utility Class Reference (Quick Glance)
Category	Prefix Examples
Spacing	p-4, pt-2, m-3, mx-1
Typography	text-sm, text-xl, font-bold
Layout	flex, grid, justify-center
Sizing	w-full, h-screen, max-w-lg
Borders	border, rounded-lg
Colors	bg-gray-100, text-primary
Effects	shadow, transition, hover:bg
Responsive	md:flex, lg:text-xl

Full reference: docs/UTILITIES.md (or generate from CSS)
````
##🛠️ Customize
Frameless is meant to be forked. To add or remove utilities:

Edit files under src/utilities/

Extend src/tokens.css with your color, spacing, typography variables

Recompile with a simple PostCSS setup if needed

Or just edit frameless.css directly for smaller projects.

## 🧪 Live Demos
Jobright UI clone (mobile-first responsive)
Dashboard layout
Pricing cards
Sticky chat panel

Coming soon: TailwindPlay + Frameless Codepen presets

## 📦 Build Instructions (Optional)
If you're using PostCSS:

postcss src/*.css -o dist/frameless.css

Add autoprefixer or purgecss if needed.

## 👥 Contributing
We welcome contributions! You can:

Submit issues or bugs

Improve token naming or structure

Suggest new utility packs (animations, forms, etc)

Optimize for accessibility

Please fork and create a PR with clear examples and class naming suggestions.

## 🔐 License
MIT — free to use, extend, and modify.

## 🌱 Inspiration
Frameless CSS is inspired by Tailwind, Basscss, and Open Props — but aims to be even simpler and easier to maintain in modern frontend workflows, especially for startup MVPs, clean HTML sites, and one-off UI prototypes.









