// lifting State UApp

import React, { Component } from 'react'
import App31user from './App31user'
import App31guest from './App31guest'
export default class App31 extends Component {
    state={
        name:'hello shah',value:10
    }
    
    render() {
        return (
            <>            
                <App31user name={this.state.name} />
                <App31guest value={this.state.value} />
            </>          
        )
    }
}
