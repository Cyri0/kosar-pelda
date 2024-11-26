import React, { createContext, useState } from 'react'
import ItemCard from './components/ItemCard'
import Navbar from './components/Navbar'

export const BasketContext = createContext()

const App = () => {
  const [basket, setBasket] = useState([
    {"name": "Nadrág", "price": 4500}
  ])

  const [items, setItems] = useState([
    {"name": "Pulóver", "price": 5000},
    {"name": "Nadrág", "price": 4500},
    {"name": "Póló", "price": 2000}
  ])

  return (
    <BasketContext.Provider value={
      {basket: basket, setBasket:setBasket}}>
    <div>
      <Navbar />
      <section>
        { items.map(item => <ItemCard {...item} />) }
      </section>
    </div>
    </BasketContext.Provider>
  ) 
}

export default App