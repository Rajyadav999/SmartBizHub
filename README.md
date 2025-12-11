# Modern Business Website — React + Vite

A fully responsive, accessible, and high-performance business website built using React, Vite, modern JavaScript (ES6+), and scalable CSS architecture.  
This project demonstrates clean component-based design, accessibility (WCAG 2.1 AA), and optimized frontend performance.

---

## Live Demo
(Add your deployed site link here, e.g., https://your-site.vercel.app)

---

## Overview
This project is a multi-page business website designed using modern frontend practices:
- Responsive design for all screen sizes  
- React component architecture  
- State management using hooks  
- Accessibility-focused development  
- Performance optimization and lazy loading  
- Modular and scalable folder structure  

This project is ideal for portfolios, internships, and real-world business websites.

---

## Features
### UI & Responsive Design
- Fully responsive layout (mobile, tablet, desktop)
- Modern layout using CSS Grid & Flexbox
- Light/Dark theme toggle (saved in local storage)
- Smooth animations & transitions
- Reusable and scalable components

### Functionality
- Filterable portfolio section
- Contact form with validation
- Mobile navigation menu
- Lazy-loaded images
- Optimized bundle size with Vite

### Developer Experience
- Fast HMR using Vite
- ESLint + Prettier for consistent code style
- Clean, modular codebase

---

## Tech Stack

### Frontend
- React 18
- JavaScript (ES6+)
- Vite (development server + bundler)
- React Router DOM
- Modern CSS (CSS Variables, Flexbox, Grid)

### Tools & Libraries
- Axios (API calls)
- clsx (conditional className helper)
- ESLint & Prettier
- Git and GitHub for version control

---

## Programming Languages Used
- JavaScript (ES6+)
- HTML5
- CSS3
- JSX

---

## Dependencies

### Core Dependencies
| Package          | Purpose                |
|------------------|------------------------|
| react            | Core UI library        |
| react-dom        | DOM renderer for React |
| react-router-dom | Routing between pages  |
| axios            | API requests (if used) |
| clsx             | Conditional CSS classes|

### Development Dependencies
| Package                | Purpose                           |
|------------------------|-----------------------------------|
| vite                   | Development server & bundler      |
| @vitejs/plugin-react   | React support for Vite            |
| eslint                 | Linting                           |
| eslint-plugin-react    | React linting rules               |
| eslint-config-prettier | Avoid ESLint + Prettier conflicts |
| prettier | Code formatting |

### package.json Snapshot
```json
{
  "dependencies": {
    "axios": "^1.6.7",
    "clsx": "^2.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.33.2",
    "prettier": "^3.2.4",
    "vite": "^5.1.0"
  }
}
