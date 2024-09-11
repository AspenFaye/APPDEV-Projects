import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"


export default function App() {
  return(
    <>
    <Header />
    <Body name="Jonah" food="Pizza" isHealthy={false} age={22} />
    <Body name="William" food="Spaghetti" isHealthy={false} age={19} />
    <Body name="Gerald" food="Torta" isHealthy={true} age={22} />
    <Body name="Nana" food="Can't Decide" isHealthy={false} age={22} />
    <Body name="Julian" food="Fried Chicken" isHealthy={false} age={22} />

    <Body />
    <Footer />
    </>
  )
}