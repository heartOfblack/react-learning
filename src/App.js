import React, {Component} from 'react';

import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react'
import Test from './model/test';
import './App.css';
import './index.css';
@observer
class App extends React.Component {
    constructor() {
        super();
       this.test=new Test();
    }

    setName = () => {
        this.test.name = 'newName'
    }

    render() {
        return (
            <div>
                <div className="name">{this.test.name}</div>

                <button className="changename" onClick={this.setName}>
                    change name
                </button>
            </div>
        )

    }

}

export default App;