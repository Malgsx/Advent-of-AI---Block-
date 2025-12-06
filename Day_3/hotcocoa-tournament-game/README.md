# 🏆 Hot Cocoa Tournament Game

A pixelated, Roblox-style tournament visualization built with vanilla JavaScript, HTML, and CSS. Features a retro gaming aesthetic with Shadcn-inspired dark theme.

## 🎮 Features

- **Pixel-Perfect Retro Design**: Press Start 2P font and blocky, gaming-inspired UI
- **Tournament Bracket**: Visualize progression from quarterfinals to championship
- **Recipe Scorecards**: Compare recipes across 4 judging criteria with animated stat bars
- **Voting Trends**: Interactive bar chart showing voting activity over time
- **Fully Customizable**: Modular architecture with separated data, styles, and logic
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Glowing effects, pulses, and hover interactions

## 📁 Project Structure

```
hotcocoa-tournament-game/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling (Shadcn-inspired)
├── js/
│   └── app.js              # Main application logic
├── data/
│   └── tournament-data.js  # Tournament data configuration
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Direct File Access
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Web Server (Recommended)
For better performance and to avoid CORS issues:

**Using Python:**
```bash
cd hotcocoa-tournament-game
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
cd hotcocoa-tournament-game
http-server -p 8000
# Visit http://localhost:8000
```

**Using PHP:**
```bash
cd hotcocoa-tournament-game
php -S localhost:8000
# Visit http://localhost:8000
```

## 🎨 Customization

### Modifying Tournament Data

Edit `data/tournament-data.js` to update:

```javascript
const tournamentData = {
    title: "YOUR TOURNAMENT NAME",
    subtitle: "YOUR SUBTITLE",
    
    champion: {
        name: "Winner Name",
        votes: 678
    },
    
    // Add/modify quarterfinals, semifinals, finals, recipes, etc.
}
```

### Changing Colors & Theme

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary: 217.2 91.2% 59.8%;  /* Main accent color */
    --gold: 45 93% 47%;             /* Gold/highlight color */
    --background: 222.2 84% 4.9%;   /* Background color */
    /* ... more variables */
}
```

### Adding New Features

The `TournamentApp` class in `js/app.js` is designed to be extended:

```javascript
class TournamentApp {
    // Add new rendering methods
    renderYourNewFeature() {
        // Your code here
    }
    
    init() {
        // Call your new method
        this.renderYourNewFeature();
    }
}
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES6+ class-based architecture
- **Google Fonts**: Press Start 2P retro gaming font

### Browser Compatibility
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

### Performance
- No external dependencies
- Lightweight (~50KB total)
- Fast load times
- Smooth 60fps animations

## 📊 Data Structure

### Recipe Format
```javascript
{
    name: "Recipe Name",
    badge: "🏆",  // Optional emoji badge
    stats: {
        richness: 8,      // 0-10
        sweetness: 6,     // 0-10
        creativity: 9,    // 0-10
        presentation: 7   // 0-10
    }
}
```

### Match Format
```javascript
{
    winner: { name: "Team A", votes: 234 },
    loser: { name: "Team B", votes: 189 }
}
```

## 🎯 Use Cases

- **Gaming Tournaments**: Esports, board games, video game competitions
- **Food Competitions**: Recipe contests, cooking battles
- **Sports Brackets**: March Madness, World Cup, playoffs
- **School Events**: Debate tournaments, spelling bees
- **Community Events**: Any bracket-style competition

## 🛠️ Development

### Adding a New Round Type
1. Update `tournament-data.js` with new round data
2. Create a render method in `app.js`
3. Add styling in `styles.css`
4. Call the method in `init()`

### Creating New Visualizations
The architecture supports adding:
- Additional chart types
- New stat displays
- Custom animations
- Interactive features

## 📝 License

MIT License - Feel free to fork, modify, and use for your own projects!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎮 Credits

- Design inspiration: Roblox, retro gaming aesthetics
- Color system: Shadcn/ui dark theme
- Font: Press Start 2P by CodeMan38

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Built with ❤️ and lots of ☕**
