/* 本文件主要了解了 错误边界 、“prop-types”的类型验证、Fragment的使用，以及defaultProps的使用 */
import React, {Fragment} from "react";
import PropTypes from 'prop-types'
class ErrorBoundary extends React.Component {
    static defaultProps = {
        componentName: 1
    }
/* defaultProps 定义了初始 props的数据，定以后可以通过this.props获取。如果子组件没有从父组件中获得对应的属性，则会使用默认属性*/



    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errinfo: ''
        }
    }

/* 包含componentDidCatch 函数的react组件，即是 错误边界组件，错误边界组件能捕获 子组件的（渲染错误） */
    componentDidCatch(err, errinfo) {
      console.log('componentDidCatch===============')
        if (err) {
            this.setState({hasError: true,errinfo})
        } 
    }

    render() {
        //Fragment是片段，主要作用就是作为一个替代元素，以免为了return 一个父元素
        //this.props.children 如果没有错则正常渲染被 错误边界包裹的子组件
        return <Fragment>
            {this.props.componentName}
            {this.state.hasError
                ? '子组件渲染报错了'
                : this.props.children} 
        </Fragment>

    }

}
//类型检查
ErrorBoundary.propTypes = {
    state: PropTypes.object,
    componentName: PropTypes.string

}

export default ErrorBoundary;