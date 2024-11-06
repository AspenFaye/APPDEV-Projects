import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Identification from './Identification'
import FavoriteFood from './FavoriteFood'
import Counter from './Counter'
import Paragraph from './Paragraph'
import MyCart from './MyCart'


function App() {
  const fruits = [
    {id: 1, name: "apple", color: "red", rating: 5},
    {id: 2, name: "lemon", color: "yellow", rating: 0},
    {id: 3, name: "orange", color: "orange", rating: 2},
    {id: 4, name: "lansones", color: "brown", rating: 1},
    {id: 5, name: "green apple", color: "green", rating: 5},
  ]
  const porkDishes = []
  return (
    <>
    <Header />
    <Identification />
    {fruits.length > 0 && <FavoriteFood items={fruits} category="My Favorite Food" />}
    {desserts.length > 0 &&
    <FavoriteFood items={porkDishes} category="I have no favorite Pork Dishes" />}
    <Counter />
    <Paragraph />
    <MyCart />
    <Footer />
    </>
  )

}

export default App