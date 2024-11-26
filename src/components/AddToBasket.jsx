import React, { useContext } from 'react'
import { BasketContext } from '../App'

const AddToBasket = (props) => {

  const ctx = useContext(BasketContext)

  const addToBasket = () => {
    ctx.setBasket(
      [...ctx.basket, 
        {name: props.name, price: props.price}])
  }

  return (
    <button onClick={addToBasket}>➕🛒</button>
  )
}

export default AddToBasket