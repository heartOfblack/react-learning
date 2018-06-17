import React from 'react'
import {observer} from 'mobx-react';
@observer
class Show extends React.Component{


constructor(){

    super()
    this.a=100;
}

render(){


return(
    <div>
        {JSON.stringify(this.props.list)}
        <button onClick={()=>{this.props.show(this.a)}}>调用show</button>
    </div>
)

}




    
}

export default Show; 