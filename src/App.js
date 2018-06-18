import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/list';
import {observable} from 'mobx';
import {observe,Provider} from 'mobx-react'
import Show from './component/show';

class App extends Component { 
 @observable list=[];

constructor(){
  super()
  this.state={list:this.list}


}

//必须要绑定该方法的this才能指向在方法里面，使得this指向类 本身
add=()=>{
// let newList=Object.assign([],this.list,this.list.push(this.list.length))
this.list.push(this.list.length)

 this.setState({list:this.list});
}

show=(mes)=>{
  console.log(mes)
}

  render() {

    return (
      <Provider t={this}> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={()=>{this.add()}} >增加</button>
        <p className="App-intro">
         {'长度：'+this.list.length+'   '+new Date().toLocaleTimeString()}
        </p>
        <Show ></Show>
        <List list={this.list}></List>
      </div>
      </Provider>
    );
  }
}

export default App;

