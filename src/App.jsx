import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setisDarkMode] = useState(true)


  // TODO: Implement state for cart management
  const[items, setItems] = useState([])

  // TODO: Implement state for category filtering
  const[activeCategory, setactiveCategory] = useState("All")


  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} setisDarkMode={setisDarkMode}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={activeCategory} onChange={(e)=>setactiveCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList setItems={setItems} activeCategory={activeCategory}/>

      {/* TODO: Implement and render Cart component */}
      <Cart items={items} />
    </div>
  )
}

export default App
