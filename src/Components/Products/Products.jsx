import React from 'react'
import Categories from './Categories'
import LatestProducts from './LatestProducts'


function Products() {
  return (
    <div className="products">
        <Categories />
        <LatestProducts />
    </div>
  )
}

export default Products