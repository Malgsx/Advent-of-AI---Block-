# ❄️ A Winter's Tale - Choose Your Own Adventure

A magical, interactive choose-your-own-adventure web application with a beautiful winter theme. Built for Day 2 of Advent of AI.

![Winter Tale Demo](./screenshot.png)

## ✨ Features

- **Interactive Storytelling**: Navigate through a branching narrative with meaningful choices
- **Multiple Endings**: 6 unique endings based on your decisions
- **5 Choice Points**: Deep branching story paths that lead to different outcomes
- **Beautiful Winter Styling**: 
  - Custom background image
  - Animated falling snowflakes (50+ particles)
  - Aurora borealis effect
  - Shadcn-inspired design system
  - Frosted glass effects with smooth animations
- **Typing Effect**: Story text appears with a pleasant typing animation
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Path Tracking**: Chapter counter shows your progress through the story

## 🎮 How to Play

1. Open `winter-tale.html` in any modern web browser
2. Read the story text as it appears
3. Click on one of the choice buttons to continue your adventure
4. Discover one of 6 unique endings!
5. Click "Begin a New Tale" to restart and explore different paths

## 🌟 Story Paths

The adventure begins in an ancient winter forest where you encounter three mysterious paths:

1. **🔔 The Sleigh Bells Path**: Meet the Guardian of Winter's Heart and embark on a heroic quest
2. **✨ The Golden Glow Path**: Discover a magical cottage and learn winter magic from a kind witch
3. **💙 The Blue Light Path**: Enter an ice palace and meet the Ice Queen

Each path branches further, leading to unique endings:
- 🌟 The Hero's Triumph
- 🏡 The Peaceful Return
- 🔮 The Winter Mage
- 🍪 The Wanderer's Joy
- ❄️ The Eternal Guardian
- 💎 The Blessed One

## 🛠️ Technical Details

### Built With
- **HTML5** - Structure and semantic markup
- **CSS3** - Advanced styling with animations and effects
- **JavaScript (TypeScript-style)** - Type-safe code with JSDoc annotations
- **Shadcn-inspired Design** - Winter color palette and component styling

### Color Palette
```css
--winter-blue: #1e3a5f
--ice-blue: #a8d5e2
--snow-white: #f8f9fa
--frost-silver: #e8f4f8
--aurora-purple: #b8a4d4
--aurora-green: #7dd3c0
--night-sky: #0f1419
--accent-gold: #d4af37
```

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
Day_2/
├── winter-tale.html    # Main application file (self-contained)
├── background.png      # Custom winter background image
└── README.md          # This file
```

## 🚀 Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd Day_2
   ```

2. Open the HTML file:
   ```bash
   # On macOS
   open winter-tale.html
   
   # On Windows
   start winter-tale.html
   
   # On Linux
   xdg-open winter-tale.html
   ```

No build process or dependencies required! The application is completely self-contained.

### Deployment

You can deploy this to any static hosting service:

- **GitHub Pages**: Enable in repository settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Import the repository
- **Any web server**: Upload the files to your hosting

## 📝 Code Highlights

### TypeScript-Style Type Safety
```javascript
/**
 * @typedef {Object} StoryNode
 * @property {string} text - The story text to display
 * @property {Choice[]} [choices] - Available choices (if any)
 * @property {string} [ending] - Ending message (if this is an ending)
 */
```

### Smooth Animations
- Falling snowflakes with randomized timing
- Aurora borealis with pulsing effect
- Button hover effects with transforms
- Typing effect for story text

### Responsive Design
- Fluid layouts that adapt to screen size
- Touch-friendly button sizes on mobile
- Readable text across all devices

## 🎨 Customization

You can easily customize the story, styling, or effects:

1. **Edit Story Content**: Modify the `storyNodes` object in the JavaScript
2. **Change Colors**: Update the CSS variables in the `:root` selector
3. **Adjust Animations**: Modify the keyframe animations and timing
4. **Add More Snowflakes**: Change `snowflakeCount` in `createSnowflakes()`
5. **Background Image**: Replace `background.png` with your own image

## 📸 Screenshots

*Add screenshots of your adventure here!*

## 🤝 Contributing

This is a personal project for Advent of AI, but feel free to fork it and create your own winter tales!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built as part of the Advent of AI challenge
- Inspired by classic choose-your-own-adventure books
- Design influenced by Shadcn UI component library
- Winter theme perfect for the holiday season

## 📧 Contact

Created for Advent of AI - Day 2

---

**Enjoy your magical winter adventure!** ❄️✨
