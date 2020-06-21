// Context API

import React, { Component } from 'react'
import App32user from './App32user'
import {Provider} from './App32context';
export default class App32 extends Component {
    state={
        name:'shah',value:20

    }

    clickContext=()=>{
        this.setState({value:this.state.value+1})
    }
    render() {
        const context={
            st:this.state,
            st1:this.clickContext
        }
        return (
            <div>
            <Provider value={context} >
            <App32user />        
            </Provider>
            </div>
        )
    }
}
