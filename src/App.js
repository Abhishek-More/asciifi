import './App.css';
import Navbar from './components/nav-bar/Navbar';
import HowItWorks from './components/how-it-works/how-it-works'
import WhatsNext from './components/whats-next/whatsNext'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HowItWorks/>
        <WhatsNext />
      </div>
    </BrowserRouter>
  )
}

export default App;
