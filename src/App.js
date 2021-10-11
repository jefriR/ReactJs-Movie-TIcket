import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Transaction from './components/Transaction';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
	        <Route path="/transaction/:imdbID" exact component={Transaction}/> 
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
