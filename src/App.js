import './App.css';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/home/Home'
import Demo from './components/demo/Demo'

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/demo' exact component={Demo} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
