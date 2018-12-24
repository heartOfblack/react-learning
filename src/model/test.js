import {observer} from 'mobx-react'
import { observable, reaction } from 'mobx';
class TestModal{
@observable name='myname';
@observable age=25;
@observable hight=175;
setnameReaction=reaction(()=>this.name,name=>{

console.log('channg name reaction and new name is :',name);

})







}
export default TestModal;