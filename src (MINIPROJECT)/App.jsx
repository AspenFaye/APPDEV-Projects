import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Games from './Components/Games';
import Game from './Components/Game';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Header /> 
      {/* Routes for the Application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games">
          <Route index element={<Games />} />
          <Route path=":gameid" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
