# Contributing to Winter Festival Fortune Teller 🔮

First off, thank you for considering contributing to the Winter Festival Fortune Teller! It's people like you that make this project such a magical experience.

## 🌟 Ways to Contribute

### 1. Add New Fortunes
The easiest way to contribute! Add your own mystical fortunes to `fortunes.js`:

```javascript
fortunes.yourCategory.push({
    text: "Your fortune here...",
    icons: "🎨✨💫"
});
```

### 2. Create New CLI Personalities
Add unique fortune teller characters to `fortune-cli.js`:

```javascript
personalities.yourCharacter = {
    name: "Your Character Name",
    greeting: "🎭 Your greeting message...",
    prefix: "Your prefix:",
    suffix: "Your closing message.",
    style: "your-style",
    color: "\x1b[35m" // Choose ANSI color code
};
```

### 3. Enhance Visual Effects
Improve the web app animations, particle effects, or add new visual elements.

### 4. Add Music Variations
Create new melodies in `music.js` using the Web Audio API.

### 5. Improve Documentation
Help others by improving README, adding examples, or creating tutorials.

### 6. Report Bugs
Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Your environment (OS, browser, etc.)

### 7. Suggest Features
Have an idea? Create an issue with:
- Clear description of the feature
- Why it would be useful
- Any mockups or examples

## 🚀 Getting Started

### Prerequisites
- Node.js (for CLI version)
- A modern web browser
- Git
- A code editor (VS Code, Sublime, etc.)

### Setup for Development

1. **Fork the repository**
   - Click the 'Fork' button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/winter-festival-fortune-teller.git
   cd winter-festival-fortune-teller
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Edit the relevant files
   - Test your changes locally

5. **Test the web version**
   ```bash
   python3 -m http.server 8000
   # Open http://localhost:8000
   ```

6. **Test the CLI version**
   ```bash
   chmod +x fortune-cli.js goose
   ./goose run
   ```

## 📋 Pull Request Process

1. **Ensure your code works**
   - Test both web and CLI versions (if applicable)
   - Check for console errors
   - Verify on different browsers/terminals

2. **Follow the existing code style**
   - Use consistent indentation (2 spaces)
   - Add comments for complex logic
   - Keep functions small and focused

3. **Update documentation**
   - Update README.md if you add new features
   - Add JSDoc comments for new functions
   - Update CLI-README.md if changing CLI features

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with details

## 💅 Code Style Guidelines

### JavaScript
- Use `const` and `let`, avoid `var`
- Use arrow functions where appropriate
- Add JSDoc comments for functions
- Keep lines under 100 characters
- Use meaningful variable names

```javascript
/**
 * Get a random fortune from a specific category
 * @param {string} category - The fortune category
 * @returns {Object} A fortune object with text and icons
 */
function getFortune(category) {
    // Implementation...
}
```

### CSS
- Use CSS variables for colors
- Group related properties
- Add comments for complex selectors
- Use BEM naming convention when possible

```css
/* Crystal ball glow effect */
.crystal-ball {
    --glow-color: #9d4edd;
    box-shadow: 0 0 20px var(--glow-color);
}
```

### HTML
- Use semantic HTML5 elements
- Add ARIA labels for accessibility
- Keep markup clean and indented

## 🎨 Adding New Fortune Categories

To add a completely new fortune category:

1. **Add to `fortunes.js`:**
```javascript
fortunes.newCategory = [
    { text: "First fortune...", icons: "🎨✨" },
    { text: "Second fortune...", icons: "🎭💫" },
    // Add at least 5-10 fortunes
];
```

2. **Update the category list in README.md**

3. **Test thoroughly**

## 🐛 Bug Reports

When reporting bugs, include:

### For Web Version
- Browser name and version
- Operating system
- Console error messages
- Steps to reproduce
- Expected vs actual behavior

### For CLI Version
- Terminal type (bash, zsh, etc.)
- Operating system
- Node.js version (`node --version`)
- Error messages
- Steps to reproduce

## ✨ Feature Requests

Good feature requests include:

- **Clear description**: What should it do?
- **Use case**: Why is it needed?
- **Examples**: How would it work?
- **Mockups**: Visual examples (if applicable)

## 📞 Questions?

- Open an issue with the `question` label
- Check existing issues first
- Be respectful and patient

## 🎯 Priority Areas

We especially welcome contributions in:

- 🌍 **Internationalization** (i18n)
- ♿ **Accessibility** improvements
- 📱 **Mobile** optimizations
- 🎨 **New visual effects**
- 🎭 **More CLI personalities**
- 🎵 **Music variations**
- 📚 **More fortunes** in existing categories

## 🙏 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit for their contributions

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone.

### Standards

- ✅ Be respectful and inclusive
- ✅ Welcome newcomers
- ✅ Accept constructive criticism
- ✅ Focus on what's best for the community
- ❌ No harassment or trolling
- ❌ No offensive comments
- ❌ No unwelcome attention

### Enforcement

Unacceptable behavior can be reported by opening an issue. All complaints will be reviewed and investigated.

## 🎉 Thank You!

Your contributions make this project better for everyone. Whether it's:
- A single fortune
- A typo fix
- A major feature
- Bug reports
- Documentation improvements

**Every contribution matters!** ✨

---

**May the Triforce guide your code!** 🔮⚔️✨
