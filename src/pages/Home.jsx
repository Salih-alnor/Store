import React from 'react'
import Header from '../Components/layout/home/Header'
import Offers from '../Components/layout/home/Offers'
import SummerSale from '../Components/layout/home/Summer-sale'
import NewProduct from '../Components/layout/home/New-Products'
import News from '../Components/layout/home/News'

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