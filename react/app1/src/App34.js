import React, { Component } from 'react'
import girl from './2.jpg'
import boy from './1.jpg'
import App34img from './App34img'
import App34error from './App34error'
export default class App34 extends Component {
    render() {
        return (
            <div>
                <App34error>
               <App34img g={girl} /> <br/>
               </App34error>

               <App34error>
               <App34img g={boy} /> <br/>
               </App34error>

               <App34error>
               <App34img g='noImage' /> 
               </App34error>
            </div>
        )
    }
}
