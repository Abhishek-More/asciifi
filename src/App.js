import './App.css';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/home/Home'

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Home />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
