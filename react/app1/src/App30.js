// callback Refs

import React, { Component } from 'react'

export default class App30 extends Component {
    constructor(props){
        super(props)
        this.backref=null
        this.setBackRef=(element)=>{
            this.backref=element
        }
    }
    componentDidMount=()=> {
        if(this.backref){
            this.backref.focus()
        }
    }
    
    render() {
        return (
            <div>
                name: <input type='text'/><br/><br/>
                pass: <input type='text' /><br/><br/>
                Address: <input type='text' ref={this.setBackRef} />
            </div>
        )
    }
}
