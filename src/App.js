import React, {Component} from 'react';
import {observable, action, computed} from 'mobx';
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
        const func = pro[key].value;
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
// @mylog
class App extends React.Component {
    constructor() {
        super();
        this.test = new Test();
    }
    // @action
    setName(...args) {
        // this.test.name = 'newName'
        this.test.state.state1[0] = 666;
        console.log('设置名称的动作');
    }
    @computed get getname() {

        return this.test.name;

    }

    render() {
        return (
            <div>
                <WrappedHorizontalLoginForm/>
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