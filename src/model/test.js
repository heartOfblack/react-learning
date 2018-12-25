import {observer} from 'mobx-react'
import { observable, reaction } from 'mobx';



class TestModal {
     hehe='hgehe'
    @observable name = 'myname';
    @observable age = 25;
    @observable hight = 175;
    @observable state = {
        state1: [11,2],
        state2: 2

  }
  
    setnameReaction = reaction(() => this.name, name => {

        console.log('channg name reaction and new name is :', name);

    })
  
  
  stateReaction = reaction(()=>this.state.state1.map(item=>item), (state)=> {
    
    console.log('state状态发生改变',state);

  })

}
export default TestModal;