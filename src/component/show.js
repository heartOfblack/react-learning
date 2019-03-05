import React from 'react'
import {Context} from './Context'
import {observer,inject} from 'mobx-react';
import List from './list'
@observer
class Show extends React.Component{


constructor(){

    super();

}
//错误边界只能捕获子组件的渲染错误，不能捕获普通的程序错误,比如 render中抛出异常才能被错误边界捕获，而不是throwsErr函数中抛出的异常
throwsErr=()=>{

    //  throw new Error('主动抛出错误');

}

render(){
 console.log(this.context);
  if(this.context.age>0.002)
 {
    throw new Error('I crashed!');
 }
return(

    <div>
        <button onClick={this.throwsErr}>子组件抛出错误</button>
        {
            this.context.name+' '+
            this.context.age
        }
        <List></List>
    </div>
)

}




    
}
Show.contextType=Context;
export default Show; 