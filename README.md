### React context 上下文
上下文相当于数据管理，避免多级子组件需要通过props来传递数据的问题。

- 需要创建一个上下文
```javascript
import React from 'react';

export const Context=React.createContext();
export const store={name:'defaultName',age:18}//数据状态管理
```
- 对于根目录，我们需要通过Context.Provider为子组件提供数据
```javascript
import {store,Context} from './component/Context';
class App extends React.Component {
    constructor () {
        super();
        this.state={...store};/* Context.Provider中的 value必须是state 并通过setstate处理，否则不会重新渲染数据，比如如果传入store而不是state，并且直接更改store的数据，则刷新不会有任何效果*/
         
       
    }

    refresh = () => {
        this.setState({
            name:Math.random()
        }) 
 }

    
    render() {
        return (
            <div>
                <button onClick={ () => { this.refresh() } }>刷新</button>
                <Context.Provider value={this.state}>
            <Show></Show>
                </Context.Provider>
            </div>
        )

    }

}
```
- 子组件类写法
```javascript
import {Context} from './Context'
class Show extends React.Component{


constructor(){

    super();

}

render(){
 console.log(this.context);

return(
   
    <div>
        {
            this.context.name+' '+
            this.context.age
        }
        <List></List>
    </div>
)

}
    
}
/* 可以为类上的 contextType 属性分配由 React.createContext() 创建的 Context 对象。 
这允许您使用this.context 使用该 Context 类型 的最近的当前值。 您可以在任何生命周期方法中引用它，包括 render 函数 */
Show.contextType=Context;
export default Show; 
```


