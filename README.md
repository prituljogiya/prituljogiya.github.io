# Flutter Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Three.js featuring beautiful animations and a professional design.

## Features

- ✨ **Three.js Animations** - Interactive 3D background with animated stars and shapes
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Modern UI/UX** - Beautiful glassmorphism effects and smooth animations
- 📄 **Complete Sections**:
  - Profile/Introduction with animated background
  - Skills & Technologies
  - Projects showcase with detailed modals
  - Work Experience timeline
  - Education
  - Certifications
  - Testimonials
  - Contact information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Three.js** - 3D animations
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **Profile Section** (`src/components/Profile.jsx`):
   - Update name, title, and introduction
   - Replace profile photo placeholder
   - Update location, experience, and email

2. **Skills** (`src/components/Skills.jsx`):
   - Modify skill categories and technologies

3. **Projects** (`src/components/Projects.jsx`):
   - Add your actual projects with screenshots
   - Update project links (Play Store, GitHub)

4. **Experience** (`src/components/Experience.jsx`):
   - Add your work experience details

5. **Education** (`src/components/Education.jsx`):
   - Update your educational background

6. **Contact** (`src/components/Contact.jsx`):
   - Update all contact information and links

7. **Certifications** (`src/components/Certifications.jsx`):
   - Add your certifications

8. **Testimonials** (`src/components/Testimonials.jsx`):
   - Add client testimonials

### Add Your Resume

Place your resume PDF in the `public` folder and update the link in `Profile.jsx`:

```jsx
href="/resume.pdf"
```

### Update Colors

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#02569B',
  secondary: '#0175C2',
  accent: '#13B9FD',
}
```

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Profile.jsx
│   │   ├── ThreeBackground.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Certifications.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## License

MIT License - feel free to use this portfolio template for your own projects!

## Support

For issues or questions, please open an issue on GitHub.

