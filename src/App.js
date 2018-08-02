import React, { Component } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './components/login';
import Home from './components/home';
import { Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){
}
  render(){
    return (
      <div >
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/home/orders" component={Home} /> */}
        {/* <Login></Login>
        <Home></Home> */}
      </div>
    )
  }
}

export default App;
