# AGENTS.md

## Cursor Cloud specific instructions

### Repository overview

This is a collection of 4 standalone mini-projects ("Day 1" through "Day 4") from Block's Advent of AI challenge. There are no shared dependencies or monorepo workspaces — each project is independent. Only Day 4 has a build system; Days 1–3 are plain static HTML/JS/CSS.

### Projects and how to run them

| Day | Project | How to run |
|-----|---------|-----------|
| Day 1 | Winter Festival Fortune Teller | Serve static files: `python3 -m http.server 8080 --directory /workspace` then open `http://localhost:8080/Day%201/winter-festival-fortune-teller/index.html`. CLI: `node "Day 1/winter-festival-fortune-teller/fortune-cli.js"` (interactive, requires TTY). |
| Day 2 | A Winter's Tale | Same static server as above, open `http://localhost:8080/Day_2/index.html`. |
| Day 3 | Hot Cocoa Tournament | Same static server, open `http://localhost:8080/Day_3/hotcocoa-tournament-game/index.html`. |
| Day 4 | Winterland Festival | `cd Day_4/winter-festival && npm install && npm run dev` → `http://localhost:3000`. |

### Lint / Build / Test

- **Lint:** The `package.json` script `npm run lint` invokes `next lint`, which was removed in Next.js 16. There is no `eslint.config.js` in the project. Linting is not currently functional — this is a pre-existing gap.
- **Build:** `npm run build` in `Day_4/winter-festival` works and produces a production build via Turbopack.
- **Tests:** There are no automated test suites in any project.
- Days 1–3 have no build step and no linting configured.

### Gotchas

- The `Day 1` directory has a space in its name (`Day 1/`). Always quote paths referencing it.
- The Day 1 CLI (`fortune-cli.js`) is an interactive terminal app that needs a TTY; it will fail with exit code 1 in non-interactive shells.
- Next.js 16 collects anonymous telemetry by default; suppress with `npx next telemetry disable` in `Day_4/winter-festival` if needed.
