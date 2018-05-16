import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import Order from "./components/Order";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrder: []
    };
  }


  handleMyOrder(product){
    let myOrder1 = []
    myOrder1.push(...this.state.myOrder, product)
    this.setState({myOrder:myOrder1})
    
  }
  render() {
 
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/Menu" render={props => <Menu {...props} myOrder={this.handleMyOrder.bind(this)}/>} />
          <Route path="/favorit" render={props => <Favorite {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          <Route path="/Order" render={props => <Order {...props} myOrder={this.state.myOrder} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
