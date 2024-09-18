import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import './App.css'

export default function App() {
  return(
    <>
    <Header />
    <Body photo="Keyboard.jpg"
    company="Allawan Company"
    Keyboard="KB-X1000"
    SwitchType="Cherry MX Red (Mechanical)"
    KeyLayout="Full-size (104 keys)"
    Backlighting="RGB with customizable colors"
    Connectivity="Wired (USB 2.0)"
    Dimensions="440 mm x 135 mm x 35 mm"
    Weight="1.2 kg"
    CableLength="1.8 meters"
    AdditionalFeatures="Anti-ghosting, N-key rollover, dedicated media controls"/>
    <Footer />
    </>
  )
}