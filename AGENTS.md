<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commit Message Rules

Before providing or creating any commit message:
1. Always run `git diff` first to examine the actual changes
2. Analyze what was modified/added/removed
3. Create a conventional commit message that accurately reflects those specific changes
4. Use the format: `type(scope): description` where scope is optional
5. Keep subject line ≤50 chars when possible, hard cap 72
6. Use imperative mood: "add", "fix", "remove" (not "added", "adds", "adding")
