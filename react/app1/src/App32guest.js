import React, { Component } from 'react'
// import {Consumer} from './App32context';
import {myContext} from './App32context'
export default class App32guest extends Component {
    static contextType=myContext  // using Context Type
    
    render() {
        console.log(this.context)
        const {name,value}=this.context.st
        return (
            <div>
                <h3>guest Component</h3>
                {/* <Consumer>
                    {({st,st1}) =>
                     <div> */}
                    {/* <h3>name: {st.name} and value: {st.value} </h3> */}
                    <h3>name: {name} and value: {value} </h3>
                    {/* <button onClick={st1} >change</button> */}
                    <button onClick={this.context.st1} >change</button>
                    
                    {/* </div> 
                    }
                </Consumer> */}
            </div>
            )       
    }
}
