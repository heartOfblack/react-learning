import React from 'react'
import {observer} from 'mobx-react';
@observer
class Show extends React.Component{

render(){


return(
    <div>
        {this.props.list}
    </div>
)

}




    
}

export default Show; 