import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListofFruits from './ListofFruits'

function App() {
  //collection of fruit objects
  const fruits = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]
  //collection of dessert objects
  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]
  //sorting the fruits in descending order/reverse alphabetical order
  //fruits.sort((a, b) => b.name.localeCompare(a.name))

  //sorting the fruits in ascending order/alphabetical order
  //fruits.sort((a, b) => a.name.localeCompare(b.name))

  //filters for colors 
  //const redFruits = fruits.filter(fruits => fruits.color === "red")

  return (
    <>
    <Header />

    {fruits.length > 0 && 
    <ListofFruits items={fruits} category="My Favorite Fruits" />}

    {desserts.length > 0 &&
    <ListofFruits items={desserts} category="My Favorite Desserts" />}

    <Footer />
    </>
  )
}

export default App
