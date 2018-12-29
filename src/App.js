import React, {Component} from 'react';

import {observable, action, trace,computed} from 'mobx';
import {observer, Provider} from 'mobx-react'
import Test from './model/test';
import './App.css';
import './index.css';

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
    @observable inputVal=''
    handleChange=(e)=>{

        this.inputVal=e.target.value;
console.log(this.inputVal)


}
    render(){trace()

return <input type="text" name="" id="" onChange={this.handleChange} value={this.inputVal}/>

    }



}




@observer
// @mylog
class App extends React.Component {
   
    constructor() {
        super();
        this.test = new Test();
        
       
    }
 /*    @action.bound
    setName (...args) {
      
    }
    @computed get getname() {

        return this.test.name;

    } */


 

    render() {trace();
        return (
           <div className="div">
           
            <Input/>

           </div>
        )

    }

}

export default App;