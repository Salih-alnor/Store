import React from 'react'
import Header from './Header'
import Offers from './Offers'
import SummerSale from './Summer-sale'
import NewProduct from './New-Products'
import News from './News'

function Home() {
  return (
    <div>
        <Header />
        <Offers />
        <SummerSale />
        <NewProduct />
        <News />
    </div>
  )
}

export default Home