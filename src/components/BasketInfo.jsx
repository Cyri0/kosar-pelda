import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../App'

const BasketInfo = () => {
  const ctx = useContext(BasketContext)
  const [priceSum, setPriceSum] = useState(0)
  
  useEffect(()=>{
    let sum = 0
    ctx.basket.forEach(item => { sum += item.price })
    setPriceSum(sum)
  }, [ctx.basket])

  return (
    <div>🤑 {priceSum} Ft ({ctx.basket.length} termék)</div>
  )
}

export default BasketInfo