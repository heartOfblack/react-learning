import React from 'react'
class list extends React.Component
{


constructor(props){
super(props);
this.state={list:props.list}
console.log('子组件的构造函数');
console.log(this.state.list)
}

render(){
let lists;
console.log('子组件的渲染内容内容');
console.log(this.props.list.length)



    if(this.props.list.length>0)
   lists= this.props.list.map((item,index)=>
        <li key={index}>{item}</li>
    )
    return (
    <ul>
        {lists}
    </ul>


)


}


}

export default list;