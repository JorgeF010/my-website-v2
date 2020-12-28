import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact />
          <Route path='/projects' exact />
          <Route path='/about' exact />
          <Route path='/contact' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
