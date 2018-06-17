#react学习笔记

- ###  jsx语法中，如果是组件元素，开头要大写，如果是普通元素，则可以小写，jsx语法是react创建react元素的语法糖，所以返回的结果是react元素

- ###  要更新数据，必须通过this.setState方法更改数据，直接对this.state处理数据时无效的，比如this.state.list.push(...)。

- ###  构造函数只会执行一次，组件会一直存留，除非销毁之后再重建。所以不要在 构造函数中处理会更新的数据。构造函数，只初始化组件的状态数据

- ### 如果子组件需要根据父组件的内容更新内容， 通过props去获取父组件的内容

- ### mobx和mobx-react的使用
mobx可以通过修饰器把状态共享出来，使得所有观察这个共享状态的组件都能随着这个数据的更新而更新。

但是在定义的observable组件中不允许同时作为观察者和被观察者，因此，如果要保持视图一致，还是得通过this.setstate来处理。

通过create-react-app脚手架创建的项目不支持 mobx的修饰器，**提示语法错误**。

解决方式

```
在create-react-app中使用装饰器

create-react-app ExampleApp
npm run eject

//非react
npm install --save-dev babel-plugin-transform-decorators-legacy

//针对react
npm install babel-preset-stage-2 --save-dev
npm install babel-preset-react-native-stage-0 --save-dev
npm install --save mobx mobx-react
根目录下创建.babelrc

// react
{
  "presets": ["react-native-stage-0/decorator-support"]
}

// 非react
{
  "presets": [
    "es2015",
    "stage-1"
  ],
  "plugins": ["transform-decorators-legacy"]

  **执行完后package.json会多出很多模块，具体npm run eject到底做了什么事，为什么要安装后续的几个babel模块还没有去了解，日后再深入了解**

  通过mobx和mobx-react，组件之间可以轻松通过@observe来更新视图内容！
```


- ### onclick绑定事件，如果带有括号的话在渲染的时候会直接被执行，所以如果有需要带参数的调用，写成匿名函数的调用方式，如下：。父组件
`onClick={()=>{this.xxx()}}`