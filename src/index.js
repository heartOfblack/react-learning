import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/**
 *在JSX写法中，回调函数 比如 onClick={this.handleClick} 必须绑定this指向该类，默认情况下JS类方法是没有绑定this的，所以渲染到DOM上，this指向的是windows
 *当然如果是普通的类则没有这个疑问，正常情况下我们都是先创建一个类对象再来调用里面的方法，或者直接调用静态方法。就不存在this指向windows的问题
 *
 * @class Toggle
 * @extends {React.Component}
 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick=()=> {
  }

  render() {
    return (
      <button onClick={this.handleClick}>


      </button>
    );
  }
}

// ReactDOM.render(<Toggle />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
