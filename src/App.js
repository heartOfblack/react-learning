import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/list'
// import 'react-mobx'

class App extends Component {
constructor(){
  super()
this.state={list:[]}

}
//必须要绑定该方法的this才能指向在方法里面，使得this指向类 本身
add=()=>{
let newList=Object.assign([],this.state.list,this.state.list.push(this.state.list.length))

this.setState({list:newList});

}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.add}>增加</button>
        <p className="App-intro">
         {'长度：'+this.state.list.length+'   '+new Date().toLocaleTimeString()}
        </p>
        <List list={this.state.list}></List>
      </div>
      
    );
  }
}

export default App;
