import './App.css';
import Navbar from './components/nav-bar/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App;
