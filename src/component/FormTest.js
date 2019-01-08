import {
  Form, Icon, Input, Button,
} from 'antd';
import React, {Component} from 'react';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {


  render() {
    console.log('表单刷新了');
    return (<div>表单组件{ this.props.update?'y':'n'}</div>)

  }
}

// const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default HorizontalLoginForm;