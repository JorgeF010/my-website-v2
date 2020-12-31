import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

class App extends Component {

  
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
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
        <h2 className='App-intro'>{this.state.data}</h2>
        <Footer/>
      </Router>
    </>
    );
  }
}

export default App;