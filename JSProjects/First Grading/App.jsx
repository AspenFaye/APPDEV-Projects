import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"

export default function App (){
  return(
    <>
    <Header />{/*This is a comment*/}
    <Body name="Gerald" food="pizza" isHealthy={false} age={22}/>
    <Body name="Gerald" food="pizza" isHealthy={false} age={22}/>
    <Body name="Gerald" food="pizza" isHealthy={false} age={22}/>
    <Body name="Gerald" food="pizza" isHealthy={false} age={22}/>
    <Footer /> //this is a functional component
    </>
  )
}