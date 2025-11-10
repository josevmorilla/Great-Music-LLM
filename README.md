# Great Music LLM - Orchestra Website

> **BC Digital Frontend Coding Challenge Submission**

A sophisticated, bilingual (English/French) landing page for Great Music LLM, a premium orchestra business.

## 🎼 Project Overview

This React + Vite application showcases a high-end orchestra website featuring:

- **Bilingual Support**: Complete English/French translation system
- **Elegant Design**: Classical music-themed UI with gold accents (#b89f6d)
- **Responsive Layout**: Mobile-first design with smooth animations

## 🔗 Live Demo & Repository

**🌐 Live Demo:** [https://great-music-llm-jvm.vercel.app](https://great-music-llm-jvm.vercel.app)  

## 🌟 Key Features

### 🇨🇦 Bilingual Experience
- **Language Toggle**: Seamless English ↔ French switching

### 🎨 Design Excellence
- **Premium Aesthetics**: Elegant typography (Playfair Display + Inter)
- **Smooth Navigation**: Anchor-based scrolling with backdrop blur header
- **Interactive Elements**: Hover effects, form validation, responsive design
- **Musical Theming**: Classical music color palette and iconography

### 🔧 Technical Highlights
- **React Context**: Global language state management
- **Modern ESLint**: Flat config with React hooks support
- **Component Architecture**: Co-located CSS, functional components
- **Accessibility**: ARIA labels, keyboard navigation support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation with language toggle
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # Company information
│   ├── Services.jsx    # Orchestra services
│   ├── Musicians.jsx   # Team profiles
│   ├── Contact.jsx     # Contact form & info
│   └── Footer.jsx      # Site footer
├── contexts/
│   └── LanguageContext.jsx  # Bilingual state management
├── utils/
│   └── translations.js      # English/French translations
└── assets/             # Static assets
```

## 🛠️ Technologies Used

- **React 19** - Modern functional components with hooks
- **Vite** - Fast development and build tooling
- **ESLint 9** - Modern flat config with React plugins
- **CSS3** - Custom styling with modern techniques (backdrop-filter, grid, flexbox)
- **Google Fonts** - Playfair Display & Inter typography

## 📱 Responsive Design

- **Mobile**: Hamburger navigation, optimized touch targets
- **Tablet**: Adjusted layouts and spacing
- **Desktop**: Full feature set with hover effects

## 🎨 Design System

```css
/* Color Palette */
--gold-accent: #b89f6d;        /* Primary accent */
--dark-navy: rgba(15, 15, 30, 0.95);  /* Backgrounds */
--white: #ffffff;              /* Text and highlights */

/* Typography */
--heading-font: 'Playfair Display', serif;
--body-font: 'Inter', sans-serif;
```

## 📧 Contact

**Submission for**: BC Digital Frontend Developer Position  
**Challenge**: Great Music LLM Orchestra Website  
