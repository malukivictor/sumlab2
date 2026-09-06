# GamerVault

A React storefront for browsing and managing a game catalog.

## Features

- **Home** — landing page with full-cover background image
- **Shop** — browse games with live search
- **Admin Portal** — add new products via a form, view all products
- Prices displayed in KSh (Kenyan Shillings)

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- json-server (mock REST API)

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the mock API server:
   ```
   npx json-server db.json --port 3001
   ```

3. In a separate terminal, start the dev server:
   ```
   npm run dev
   ```

4. Open the app at the URL Vite prints (usually `http://localhost:5173`).

## Project Structure

```
src/
├── assets/          # images
├── components/      # Navbar, Layout
├── pages/           # Home, Shop, AdminPortal
db.json              # mock product data
```

## API

`json-server` serves products at `http://localhost:3001/products` with full CRUD (GET, POST, PATCH, DELETE).