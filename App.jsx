import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"




export default function App() {
  return(
    <>
    <Header />
    <Body photo="Friend.jpg" name="Gerald Prince B. Allawan" birthdate="December 12, 2002" birthplace="San Fernando, La Union" age={22} 
    hobbies="playing games (Legends of Runeterra, Mobile Legends, Valorant), reading thriller and romantic books, and working out" />
    <Body />
    <Footer />
    </>
  )
}