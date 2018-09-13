import React, { Component } from 'react';
import Login from './screens/Login';
import Form from './screens/form/Form';
import Footer from './screens/Footer';
import './css/bootstrap/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
