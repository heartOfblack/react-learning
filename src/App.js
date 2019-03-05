import React, {Component} from 'react';

import {observable, action, trace,computed,reaction} from 'mobx';
import {observer, Provider} from 'mobx-react'
import Test from './model/test';
import { Form} from 'antd';
import './App.css';
import './index.css';
import WrappedHorizontalLoginForm from './component/FormTest'
import {store,Context} from './component/Context';
import Show from './component/show';
import ErrorBoundary from './component/ErrorBoundary'

@observer
class App extends React.Component {
    @observable update = false;   
    @observable test = false;   
    
    constructor () {
        super();
        this.test = new Test();
        this.state={...store};
         
       
    }

@action
    refresh = () => {
    
        this.setState({
            name:Math.random()
        }) ;
        
        
 }

    reaction1 = reaction(() => this.update, (update) => {
        
        console.error('对update产生了反应',update.toString());

    })
    
    render() {
        trace();
        console.log(this.state)
        return (
            <ErrorBoundary>
            <div>
                <button onClick={ () => { this.refresh() } }>刷新</button>
                <Context.Provider value={this.state}>
                <Show></Show>
                </Context.Provider>
            </div>
        </ErrorBoundary>
        )

    }

}

export default App;