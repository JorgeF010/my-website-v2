import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
