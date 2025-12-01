# Adding New Days to the Challenge

Quick guide for adding each new day's project to the repository.

## Steps for Each New Day

### 1. Create Day Folder

```bash
cd "/Users/malgsx/Advent of AI"
mkdir "Day X"
cd "Day X"
```

Replace `X` with the day number (2, 3, 4, etc.)

### 2. Create Your Project

Build your project for the day in this folder.

### 3. Add Project README

Copy the template:

```bash
cp ../PROJECT_TEMPLATE.md ./your-project-folder/README.md
```

Fill in the template with:
- Project name and description
- Technologies used
- Installation and usage instructions
- What you learned
- Challenges faced

### 4. Update Main README

Edit `/Users/malgsx/Advent of AI/README.md`:

1. **Update Progress Tracker** - Check off the completed day:
   ```markdown
   - [x] **Day X** - [Project Name](./Day%20X/project-folder/) - Brief description
   ```

2. **Add to Projects Section** - Add a new project entry:
   ```markdown
   ### Day X: [Project Name]

   **Technologies:** [List technologies]
   **Type:** [Web App / CLI / API / etc.]
   **Status:** ✅ Complete

   [Project description and features]

   [View Project](./Day%20X/project-folder/) | [Live Demo](#)
   ```

3. **Update Progress Table** - Update completion numbers:
   ```markdown
   ![Days Completed](https://img.shields.io/badge/Days%20Completed-X%2F23-green?style=for-the-badge)
   ```
   
   And the table at bottom:
   ```markdown
   **Total Progress:** X/23 days (X.X%)
   ```

4. **Update "Last Updated" date** at the bottom

### 5. Commit and Push

```bash
cd "/Users/malgsx/Advent of AI"

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Add Day X: [Project Name]

- [Brief description of what was built]
- Technologies: [list]
- Features: [list]"

# Push to GitHub
git push origin main
```

## Project Structure Example

```
Advent of AI/
├── README.md                    # Main challenge README (update this!)
├── Day X/
│   └── your-project-name/
│       ├── README.md            # Project-specific README
│       ├── src/                 # Source files
│       ├── [other files]
│       └── ...
```

## Template Variables to Replace

When using PROJECT_TEMPLATE.md, replace:

- `[X]` - Day number
- `[Your project name here]` - Actual project name
- `[Brief description...]` - What the project does
- `[Technology 1, 2, 3]` - Tech stack used
- `[Feature 1, 2, 3]` - Key features
- `[Learning 1, 2, 3]` - What you learned
- `[Challenge 1, 2]` - Problems you solved

## Quick Checklist

For each new day:

- [ ] Create Day X folder
- [ ] Build the project
- [ ] Add project README (from template)
- [ ] Update main README progress tracker
- [ ] Update main README projects section
- [ ] Update completion badge and stats
- [ ] Update "Last Updated" date
- [ ] Commit and push to GitHub
- [ ] (Optional) Add live demo link if deployed
- [ ] (Optional) Add screenshots

## Tips

1. **Work in the Day folder** - Keep each day's project isolated
2. **Document as you go** - Update README while building
3. **Commit frequently** - Don't wait until the end
4. **Add screenshots** - Visual documentation helps
5. **Link resources** - Include relevant links and references
6. **Celebrate progress** - Update that completion percentage!

## Example Commit Messages

Good commit messages for new days:

```
Add Day 2: Weather Dashboard

- Built responsive weather app with API integration
- Technologies: React, OpenWeather API, TailwindCSS
- Features: 5-day forecast, location search, favorites
```

```
Add Day 5: Markdown Blog Generator

- Created static site generator from markdown files
- Technologies: Node.js, Markdown-it, EJS templates
- Features: Syntax highlighting, RSS feed, tagging
```

## Need Help?

- Check `PROJECT_TEMPLATE.md` for the README template
- Look at `Day 1/winter-festival-fortune-teller/README.md` for an example
- Review the main `README.md` for format examples

---

**Keep building!** 🚀

One day at a time, one project at a time.
