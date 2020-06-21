// pure component: shouldComponentUpdate is laready compare by default in pure comp.

import React, { PureComponent } from 'react'

export default class App36pure extends PureComponent {
        // shouldComponentUpdate(nextProps, nextState) {
        //     return true
        // }
    
    
    render() {
        console.log('pure compo rendered')
        return (
            <div>
                <h3>pure Component:{this.props.name} </h3>
            </div>
        )
    }
}
    