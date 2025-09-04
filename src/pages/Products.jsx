import React from 'react'
import Categories from '../Components/Products/Categories'
import LatestProducts from '../Components/Products/LatestProducts'


function Products() {
  return (
    <div className="products">
        <Categories />
        <LatestProducts />
    </div>
  )
}

export default Products