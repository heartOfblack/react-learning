import React from 'react'
import {observer} from 'mobx-react';
import {Context} from './Context'
@observer
class list extends React.Component
{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {`这里是子组件${this.context.name}`
}

            </div>

        )

    }

}
list.contextType = Context;
export default list;