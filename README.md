# ReplyTo

A curated reply-finder site. Content is manually maintained (no AI involved).

## Run locally

```
bun install
bun run dev
```

(or `npm install` / `npm run dev` if you're not using Bun)

Then open the URL it prints (usually http://localhost:5173).

## Deploying

This is a standard Vite + React app, so it deploys to Vercel or can be
imported into Lovable like any other Vite project — just point it at this
folder (or its zipped contents) and run the same install/build commands.

## Structure

- `src/pages/` — one file per public route (Home, GfBf, Boss, etc.), plus
  `src/pages/admin/` for the admin dashboard.
- `src/pages/CategoryPage.jsx` — the single generic template that all
  category pages (GfBf, Boss, Client, ...) render through. Each page file
  is just a thin wrapper pointing at its category config.
- `src/components/` — shared building blocks: `ReplyCard`, `CategoryCard`,
  `PageHeader`, `SearchBar`, `NavBar`, `Footer`, `Icons`, `Toast`.
- `src/data/categories.js` — the category list, routes, nav labels, and the
  ordered subcategory sections for each page. Edit this to rename a
  section or reorder pages.
- `src/data/replies.js` — the mock reply library (~70 starter replies
  covering every subcategory across every page).
- `src/context/RepliesContext.jsx` — an in-memory store wrapping the reply
  data. The admin dashboard (`/admin`) reads/writes through this, so
  Add/Edit/Delete/Feature changes show up on the public pages immediately
  — but nothing persists after a page refresh, since there's no database
  yet.

## Admin

Visit `/admin` (not linked from the public nav). It has:
- **Dashboard** — totals, category count, popular replies
- **Replies** — search, filter by category, feature/unfeature, edit, delete
- **Add Reply** / **Edit Reply** — full form matching the reply data shape
- **Categories** — category list with live reply counts

All of this is mock/local data held in React state — refreshing the page
resets it back to the starter set.
