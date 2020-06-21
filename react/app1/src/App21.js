// key

import React, { Component } from 'react'
import App21key from './App21key'
export default class App21 extends Component {
    render() {
    const arr=this.props.num
    const newArr=arr.map(num1=>{
    return <App21key key={num1} value={num1} />
})
        return (
            <ul>
               {newArr} 
            </ul>
        )
    }
}

