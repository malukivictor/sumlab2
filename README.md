# GamerVault

A React storefront for browsing and managing a game catalog.

## Features

- **Home** — landing page with full-cover background image
- **Shop** — browse games with live search
- **Admin Portal (Game Wizard Portal)** — add and delete games via a form
- Custom useProducts hook handles all data fetching and API calls
- Prices displayed in KSh (Kenyan Shillings)

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- json-server (mock REST API)

## Getting Started

1. Install dependencies:
   
   npm install
   

2. Start the mock API server:
   
   npm run server


3. In a separate terminal, start the dev server:
   
   npm run dev
   

4. Open the app at the URL Vite prints (usually `http://localhost:5173`).

## Project Structure

```
src/
├── assets/          # images
├── components/      # Navbar, Layout
├── hook/            # useProducts custom hook (all CRUD logic)
├── pages/           # Home, Shop, AdminPortal
db.json              # mock game data
```

## API

`json-server` serves games at `http://localhost:3001/products`.

Current CRUD support via `useProducts`:
- **GET** — fetch all products on load
- **POST** — add a new game
- **DELETE** — remove a game

## Routes

 `/`       Home          
 `/shop`   Shop          
 `/admin`  Admin Portal  