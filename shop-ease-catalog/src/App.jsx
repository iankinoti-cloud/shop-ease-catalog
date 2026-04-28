import { useState } from 'react'
import './App.css'
import products from './data/products'
import ProductCard from './components/ProductCard'
import FilterBar from './components/FilterBar'

const categories = ['All', ...new Set(products.map((p) => p.category))]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <header className="catalog-header">
        <h1>ShopEase</h1>
        <p>Browse our catalog</p>
      </header>

      <main className="catalog-main">
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
