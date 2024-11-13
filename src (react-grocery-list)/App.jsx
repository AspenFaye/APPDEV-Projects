import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shop from './Shop'
import Header from './Header'
import Footer from './Footer'


function App() {
  let items = [
    {id: 1, name: "Grapes", price: 10},
    {id: 2, name: "Oranges", price: 15},
    {id: 3, name: "Kiwis", price: 20},
    {id: 4, name: "Bananas", price: 25},
    {id: 5, name: "Cucumbers", price: 30},
  ]

  return (
    <>
    <Header />
    <Shop items={items}/>
    <Footer />
    </>
  )
}

export default App