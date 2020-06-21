import React, { Component } from 'react'

// if else
export default class App19guest extends Component {
    render() {
        return (
            <div>
             <h3>welcome guest</h3>   
            <button onClick={this.props.click2} >login</button>
            <button>signup</button>
            </div>
        )
    }
}
