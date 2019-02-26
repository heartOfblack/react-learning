import React from 'react'
import {Context} from './Context'
import {observer,inject} from 'mobx-react';
import List from './list'
@observer
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
Show.contextType=Context;
export default Show; 