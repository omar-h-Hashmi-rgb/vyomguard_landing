# VyomGarud - Advanced UAV Systems Landing Page

A modern, responsive landing page for VyomGarud, showcasing military-grade UAV/drone systems with a professional, futuristic design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with military-grade aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Performance**: Built with Next.js 14 for optimal performance
- **Accessibility**: WCAG compliant design patterns
- **SEO Ready**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel/Netlify ready

## 📱 Sections

1. **Hero** - Company branding with compelling tagline and CTA
2. **About** - Mission statement and core values
3. **Capabilities** - 4 key product offerings with detailed features
4. **Highlights** - 3 key differentiators
5. **Contact** - Contact form and business information
6. **Footer** - Links, social media, and legal information

## 🎨 Design System

### Colors
- **Primary**: Orange (#ff7b00)
- **Background**: Charcoal variants (#0f0f0f to #2a2a2a)
- **Text**: White and charcoal variants
- **Accents**: Subtle gradients and glows

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (content)
- **Mono**: System monospace (technical elements)

### Animations
- Fade-in effects on scroll
- Hover transforms and transitions
- Subtle floating animations
- Progressive loading animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```powershell
# Clone the repository
git clone https://github.com/ayush2005k/vyomgarud-landing.git
cd vyomgarud-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Build for Production

```powershell
# Build the application
npm run build

# Start production server (optional)
npm start
```

## 🌐 Deployment

### Vercel Deployment

```powershell
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Netlify Deployment

```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --dir=.next

# For production deployment
netlify deploy --prod --dir=.next
```

## 📁 Project Structure

```
vyomgarud-landing/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles and Tailwind imports
├── components/
│   ├── Hero.js            # Hero section with branding
│   ├── About.js           # About section with mission
│   ├── Capabilities.js    # Product/service showcase
│   ├── Highlights.js      # Key differentiators
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer with links and legal
├── public/
│   └── images/           # Static assets (add your images here)
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## 🎯 Key Features Implemented

### Responsive Design
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interactions
- Optimized images and assets

### Performance Optimizations
- Next.js App Router for optimal loading
- Component code splitting
- Image optimization
- CSS optimization with Tailwind

### Military-Grade Aesthetics
- Dark, professional color scheme
- Technical interface elements
- Subtle grid patterns and animations
- Clean, confident typography

### Interactive Elements
- Smooth scroll animations
- Hover effects and transforms
- Progressive disclosure
- Form validation and feedback

## 🛡️ Security & Compliance

The design includes appropriate disclaimers and compliance notices for defense/military applications:
- Export control notices
- Usage restrictions
- Legal compliance information
- Contact information for compliance queries

## 📊 Performance Metrics

Target performance goals:
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

