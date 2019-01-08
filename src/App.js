import React, {Component} from 'react';

import {observable, action, trace,computed} from 'mobx';
import {observer, Provider} from 'mobx-react'
import Test from './model/test';
import { Form} from 'antd';
import './App.css';
import './index.css';
import WrappedHorizontalLoginForm from './component/FormTest'
/* function mylog(target) {
    const pro = Object.getOwnPropertyDescriptors(target.prototype);
    for (const key in pro) {
        if (key === 'constructor') {
            continue;
        }
    
        const func = pro[ key ].value;
        if (typeof func === 'function') {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                    console.log('重新定义的function');
                    for (let val of args) {
                        if (typeof val !== 'number') {
                            throw Error(`${val} is not number`)
                        }

                    }
                    return func.apply(this, args);
                }

            })

        }
    }
} */

@observer
class Input extends Component{
    @observable inputVal = '';
    handleChange=(e)=>{
    this.inputVal=e.target.value;
        console.log(this.inputVal);
}
    render(){
console.log('表单刷新了')
return <input type="text" name="" id="" onChange={this.handleChange} value={this.inputVal}/>

    }



}







@observer
// @mylog
class App extends React.Component {
    @observable update = false;   
    @observable test = false;   
    
    constructor () {
        super();
        this.test = new Test();
         
       
    }
 /*    @action.bound
    setName (...args) {
      
    }
    @computed get getname() {

        return this.test.name;

    } */

@action
    refresh = () => {
        this.update = !this.update;
        setTimeout(() => {
            this.test = !this.test;
        }, 1e3);
        
 }

    render() {
        trace();
        return (
            <div>
                <button onClick={ () => { this.refresh() } }>刷新{ this.update?'y':'n'}{ this.test?'yt':'nt'}</button>
                <WrappedHorizontalLoginForm update={true} />
              {/*   <div className="name">{this.getname}</div>
                <div className="name">{this.test.state.state1}</div>
                <div className="name">{this.test.state.state2}</div>

                <button
                    className="changename"
                    onClick={() => {
                    this.setName(1, 2, 3, 6, 'x')
                }}>
                    change name
                </button> */}
            </div>
        )

    }

}

export default App;