# Madame Zelda's Mystical Crystal Ball

> A Winter Festival Fortune Teller - Available as PWA and CLI!

![Winter Festival](https://img.shields.io/badge/Winter-Festival-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=for-the-badge)

**Madame Zelda's Mystical Crystal Ball** is a delightful fortune-telling experience inspired by *The Legend of Zelda* series. Get your mystical fortunes through a beautiful web interface or directly in your terminal with colorful CLI personalities!

## Features

### Web App (PWA)
- **Beautiful Crystal Ball** - Animated with glowing effects and particle animations
- **Original Music** - Zelda-inspired mystical melody (Web Audio API)
- **Progressive Web App** - Install on any device (iOS, Android, Desktop)
- **Magical Visuals** - Starfield background, Triforce, rupees, hearts
- **Particle Effects** - Tap the crystal ball for magical sparkles
- **Easter Eggs** - Try the Konami Code (↑ ↑ ↓ ↓ ← →)
- **Contextual Fortunes** - Adapts to time of day and season

### CLI Version
- **6 Unique Personalities** - Different fortune teller characters each run
- **Colorful Output** - Beautiful terminal styling with emojis
- **Instant Fortunes** - Quick mystical wisdom in your terminal
- **Smart Selection** - Context-aware based on time and season

### Fortune Categories

- **Adventure & Quests** - Epic journeys await
- **Love & Romance** - Matters of the heart
- **Wealth & Prosperity** - Abundance and fortune
- **Health & Vitality** - Wellness and energy
- **Cosmic & Celestial** - Wisdom from the stars
- **Winter Festival** - Seasonal magic
- **Wisdom & Knowledge** - Ancient insights
- **Courage & Strength** - Brave your path

## Quick Start

### Web Version

#### Option 1: Local Testing

**Using Python:**
```bash
cd winter-festival-fortune-teller
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

#### Option 2: Deploy (Recommended!)

**GitHub Pages:**
1. Fork this repository
2. Go to Settings → Pages
3. Select your main branch
4. Your app will be live at: `https://yourusername.github.io/winter-festival-fortune-teller`

**Netlify:**
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire folder
3. Get instant live URL!

**Vercel:**
```bash
npm i -g vercel
cd winter-festival-fortune-teller
vercel
```

### CLI Version

#### Installation

1. **Make the CLI script executable:**
   ```bash
   chmod +x fortune-cli.js
   chmod +x goose
   ```

2. **Add to your PATH:**
   
   Create a symlink (recommended):
   ```bash
   ln -s $(pwd)/goose ~/.local/bin/fortune
   ```
   
   Or add an alias to your `.bashrc` or `.zshrc`:
   ```bash
   alias fortune="/path/to/winter-festival-fortune-teller/goose"
   ```

3. **Reload your shell:**
   ```bash
   source ~/.bashrc  # or source ~/.zshrc
   ```

#### Usage

Simply run:
```bash
fortune run
```

Get multiple fortunes:
```bash
fortune run
fortune run
fortune run
```

Each run gives you a random personality and fortune!

## CLI Personalities

Meet the mystical characters who deliver your fortunes:

| Character | Description | Style |
|-----------|-------------|-------|
| 🔮 **Madame Zelda** | The mystical crystal ball seer | Purple, mysterious |
| 🧙‍♂️ **The Wise Sage** | Ancient scholarly wisdom keeper | Cyan, scholarly |
| 🧚‍♀️ **The Fairy Queen** | Whimsical magical spirit | Light magenta, playful |
| ❄️ **The Winter Spirit** | Bringer of seasonal messages | Light cyan, serene |
| 🌌 **The Cosmic Oracle** | Reader of the stars | Light blue, celestial |
| ⚔️ **The Courageous Hero** | Brave quest giver | Light red, bold |

## Installing as PWA

### iOS (iPhone/iPad)
1. Open in Safari
2. Tap the Share button (□↑)
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"

### Android
1. Open in Chrome
2. Tap menu (⋮)
3. Tap "Add to Home Screen" or "Install App"

### Desktop (Chrome/Edge)
1. Look for install icon in address bar
2. Click "Install"

## Customization

### Adding Your Own Fortunes

Edit `fortunes.js` and add to any category:

```javascript
fortunes.adventure.push({
    text: "Your custom fortune here...",
    icons: "⚔️✨🏆"
});
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #6b46c1;    /* Purple */
    --secondary: #9d4edd;  /* Light purple */
    --accent: #ffd700;     /* Gold */
}
```

### Customizing Music

Modify the melody array in `music.js` to create your own tune.

### Creating New CLI Personalities

Add a new personality to `fortune-cli.js`:

```javascript
personalities.yourCharacter = {
    name: "Your Character",
    greeting: "🎭 Your greeting...",
    prefix: "Your prefix:",
    suffix: "Your suffix.",
    style: "your-style",
    color: "\x1b[32m" // Green
};
```

## Project Structure

```
winter-festival-fortune-teller/
├── index.html              # Main HTML structure
├── styles.css              # Styling and animations
├── app.js                  # Web app logic
├── fortunes.js             # Fortune database (200+ fortunes)
├── music.js                # Music generator (Web Audio API)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline support)
├── fortune-cli.js          # CLI fortune teller (Node.js)
├── goose                   # CLI runner script
├── icon-192.png            # App icon (192x192)
├── icon-512.png            # App icon (512x512)
├── generate-icons.html     # Icon generator (HTML Canvas)
├── generate-icons.py       # Icon generator (Python)
├── README.md               # This file
├── CLI-README.md           # CLI-specific documentation
└── .gitignore              # Git ignore rules
```

## Technical Details

### Web App Stack
- **Pure Vanilla JavaScript** - No frameworks required
- **Web Audio API** - Original music composition
- **Canvas API** - Particle effects and animations
- **Service Worker** - Offline functionality
- **LocalStorage** - Save fortune count and preferences
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects

### CLI Stack
- **Node.js** - JavaScript runtime for CLI
- **ANSI Escape Codes** - Terminal colors and styling
- **Bash Script** - Simple runner script

## Smart Features

### Context-Aware Fortunes
- **Winter Months** (Nov-Jan): 40% chance of winter-themed fortunes
- **Evening/Night** (6pm-5am): 30% chance of cosmic fortunes
- **Random Selection**: All other times

### Progressive Enhancement
- Works without JavaScript (shows fallback message)
- Graceful degradation for older browsers
- Responsive design for all screen sizes

## Easter Eggs

- **Konami Code**: ↑ ↑ ↓ ↓ ← → (on web version)
- **Crystal Ball Click**: Triggers particle effects
- **Multiple Categories**: Fortunes adapt to season and time
- **Fortune Count**: Tracks how many fortunes you've received

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Ideas for Contributions
- New fortune categories
- Additional CLI personalities
- More music variations
- Internationalization (i18n)
- New visual effects
- More easter eggs
- Enhanced mobile features

## License

This project is licensed under the MIT License - see the [LICENSE](#license) file for details.

## Credits

Created for the Winter Festival as part of **Block's Advent of AI** challenge.

### Special Thanks
- **[Block](https://block.xyz/)** - For creating and hosting the Advent of AI challenge, inspiring developers to build with AI tools
- **Goose AI** - The AI assistant that helped build this project
- *The Legend of Zelda* series - For inspiration (all content is original and non-copyrighted)

### Challenge Information
This project was created as Day 1 of Block's Advent of AI challenge, where developers use Goose (Block's open-source AI coding assistant) to build creative projects over 23 days.

Learn more about the challenge: [Block's Advent of AI](https://www.adventof.ai/)

### Technologies Used
- Web Audio API
- Canvas API
- Service Workers
- Progressive Web Apps (PWA)
- Node.js
- ANSI Terminal Styling

## Links

- [Web Demo](#) - (Add your deployed URL here)
- [Report Bug](https://github.com/yourusername/winter-festival-fortune-teller/issues)
- [Request Feature](https://github.com/yourusername/winter-festival-fortune-teller/issues)

## Screenshots

### Web Version
*(Add screenshots of your web app here)*

### CLI Version
```
══════════════════════════════════════════════════════════════════════
🔮 Greetings, traveler... Madame Zelda sees all...
══════════════════════════════════════════════════════════════════════

The crystal ball reveals:

⚔️✨👑  The master sword of opportunity is waiting. You must prove yourself worthy first.  ⚔️✨👑

So it is written in the stars...

Category: ADVENTURE
══════════════════════════════════════════════════════════════════════
```

## Show Your Support

If you enjoyed this project, please give it a star on GitHub!

---

**May the Triforce guide your path!**

*Happy Fortune Telling!*
