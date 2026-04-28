# ShopEase Product Catalog

A dynamic product catalog built with React and Vite. Users can browse products and filter them by category all without any page reloads.

## Features

- Displays product cards with image, title, price, and category
- Filter products by category (Electronics, Clothing, Sports, Kitchen)
- "All" button resets the filter to show every product
- State-driven UI; React re-renders only what changes

## Project Structure

```
src/
├── components/
│   ├── FilterBar.jsx   # Category filter buttons
│   └── ProductCard.jsx # Individual product card
├── data/
│   └── products.js     # Static product data
├── App.jsx             # Root component — holds filter state
└── App.css             # Catalog styles
```

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Built With

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
