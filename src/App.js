import React, { Component } from 'react';
//import Login from './screens/Login';
import Form from './screens/form/Form';
import Footer from './screens/Footer';
//import Home from './screens/home/Home';
import './css/bootstrap/css/bootstrap.css';

class App extends Component {
  render() {
    return (
//    	<Home />
      <div className="App">
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
