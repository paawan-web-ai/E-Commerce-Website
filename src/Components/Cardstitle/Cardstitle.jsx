import React, { useState } from 'react'
import { Item } from 'three/examples/jsm/inspector/ui/Item.js';
import "./Cardtitle.css"
const Cardstitle = () => {
  const products = [
    { id: 1, name: "Papaya", category: "featured", price: 55 },
    { id: 2, name: "Avocado", category: "featured", price: 29 },
    { id: 3, name: "Kiwi", category: "new", price: 29 },
    { id: 4, name: "Eggplant", category: "best", price: 41 },
    { id: 5, name: "Apple", category: "new", price: 32 },
    { id: 6, name: "Banana", category: "best", price: 21 }
  ];
  const [activetab, setactivetab] = useState("featured")

  const filterProducts = products.filter((item) => {
    return item.category === activetab
  })
  return (

    <div className='mt-10'>
      <div className='tabs cursor-pointer flex justify-center gap-30 mb-5 '>
        <h2 onClick={() => { setactivetab("featured") }}>Featured Products</h2>
        <h2 onClick={() => { setactivetab("new") }}>New Arrival</h2>
        <h2 onClick={() => { setactivetab("best") }}>Best Sellers</h2>
      </div>
      <hr className='w-[60%] mx-auto' />
      <div className='flex mt-10 justify-center gap-35'>
        {filterProducts.map((item) => {
          return (
            <div className='card' key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cardstitle
