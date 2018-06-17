import React from 'react'
import {observer} from 'mobx-react';
@observer
class list extends React.Component
{

del=()=>{

this.props.list.pop();


}

render(){
let lists;

    if(this.props.list.length>0)
   lists= this.props.list.map((item,index)=>
        <li key={index}>{item}</li>
    )
    return (
        <div>
            <button onClick={this.del}>LIST组件删除</button>
        <ul>
        {lists}
    </ul>

        </div>
    
)


}


}

export default list;