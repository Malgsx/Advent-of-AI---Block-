# Day 4: Winterland Festival Website

A beautiful, winter-themed festival landing page built with modern web technologies.

## Description

An immersive winter festival website featuring animated snowfall, interactive components, and a cozy winter aesthetic. The site showcases festival highlights including fortune telling, fireside storytelling, and an artisan hot cocoa bar.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Radix-based component library
- **TanStack Query** - Data fetching and state management
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Features

- ❄️ Animated canvas snowfall effect
- 🏠 Hero section with festival information and countdown
- 🔮 Highlights: Fortune Telling, Storytelling, Hot Cocoa Bar
- 🎆 Featured events section with gradient cards
- 📅 Tabbed daily schedule (Weekdays/Weekends/Christmas Eve)
- 🎟️ Ticket pricing cards with popular tier highlighting
- ⏰ Live countdown timer to festival opening
- 📱 Fully mobile-responsive design
- 🎨 Winter color palette with gold accents

## Installation

```bash
cd winter-festival
npm install
```

## Usage

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` (or specify port with `PORT=3001 npm run dev`)

## Project Structure

```
winter-festival/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind + custom styles
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page component
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── navbar.tsx       # Navigation with mobile menu
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── highlights.tsx   # Special highlights
│   │   ├── events.tsx       # Featured events
│   │   ├── schedule.tsx     # Tabbed schedule
│   │   ├── tickets.tsx      # Pricing cards
│   │   ├── countdown.tsx    # Live countdown
│   │   ├── footer.tsx       # Site footer
│   │   └── snowfall.tsx     # Canvas snow animation
│   └── lib/
│       ├── utils.ts         # Utility functions
│       └── query-provider.tsx # TanStack Query setup
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## Screenshots

The website features:
- Animated snowfall overlay
- Gradient hero section with statistics
- Card-based highlights with hover effects
- Interactive schedule tabs
- Tiered pricing cards

## What I Learned

- Setting up shadcn/ui components manually without CLI
- Integrating TanStack Query with Next.js App Router
- Creating performant canvas animations in React
- Building accessible tabbed interfaces with Radix UI
- Configuring custom Tailwind themes with winter colors

## Challenges Faced

- **Multiple lockfiles issue**: Next.js was detecting a stray `package-lock.json` in the home directory, causing port binding issues. Solved by removing the stray lockfile.
- **Canvas performance**: Optimized snowfall animation using requestAnimationFrame and limiting particle count based on viewport width.

## Future Improvements

- Add gallery section with lightbox
- Implement ticket purchase flow
- Add map/directions section
- Integrate with a CMS for content management
- Add accessibility improvements (reduced motion preferences)

## Deployment

This project is configured for Vercel deployment. Simply:
1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy automatically

## Credits

Built with [Goose AI](https://github.com/block/goose) as part of [Block's Advent of AI](https://www.adventof.ai/) challenge.

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.
