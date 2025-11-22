# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:3000`

### 3. Customize Your Information

#### Priority Updates (Must Do):

1. **Profile Section** - `src/components/Profile.jsx`
   - Line 30: Update profile photo URL
   - Line 35: Change "Your Full Name"
   - Line 41: Update professional title
   - Line 47-50: Update introduction text
   - Line 60: Update location
   - Line 66: Update experience years
   - Line 72: Update email

2. **Contact Section** - `src/components/Contact.jsx`
   - Update all contact information (phone, email, links)
   - Update social media links (LinkedIn, GitHub, etc.)

3. **Projects** - `src/components/Projects.jsx`
   - Replace placeholder projects with your actual projects
   - Add real project screenshots
   - Update project links (Play Store, GitHub)

4. **Experience** - `src/components/Experience.jsx`
   - Update with your actual work experience
   - Modify company names, roles, and tasks

5. **Education** - `src/components/Education.jsx`
   - Update with your educational background

#### Optional Updates:

- **Skills** - `src/components/Skills.jsx` (if you want to modify)
- **Certifications** - `src/components/Certifications.jsx`
- **Testimonials** - `src/components/Testimonials.jsx`

### 4. Add Your Resume

1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button in the Profile section will work automatically

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#02569B',    // Main blue
  secondary: '#0175C2',  // Secondary blue
  accent: '#13B9FD',     // Accent/light blue
}
```

### Modify Three.js Animation
Edit `src/components/ThreeBackground.jsx` to change:
- Number of stars (currently 5000)
- Animation speed
- Colors
- Shapes

## 📱 Testing

Test on different screen sizes:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to [netlify.com](https://netlify.com)

## ✅ Checklist Before Going Live

- [ ] Updated all personal information
- [ ] Added real project screenshots
- [ ] Updated all contact links
- [ ] Added resume.pdf to public folder
- [ ] Tested on mobile and desktop
- [ ] Verified all links work
- [ ] Updated social media profiles
- [ ] Tested download resume button

## 🆘 Need Help?

Check the main README.md for more detailed information.

