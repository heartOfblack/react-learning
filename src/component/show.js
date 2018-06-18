import React from 'react'
import {observer,inject} from 'mobx-react';
@inject('t')

@observer
class Show extends React.Component{


constructor(){

    super()
    this.a=100;
}

render(){


return(
    <div>
        {JSON.stringify(this.props.t.list)}
        <button onClick={()=>{this.props.t.show(this.a)}}>调用show</button>
    </div>
)

}




    
}

export default Show; 