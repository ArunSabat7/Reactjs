import React, { Component } from 'react'

export default class App36reg extends Component {
    shouldComponentUpdate(newProps,newstate){
        if(newProps.name!==this.props.name){
            return true
        }else{
            return false
        }
    }
    
    render() {
        console.log('reg compo rendered')
        return (
            <div>
                <h3>regular Component:{this.props.name} </h3>
            </div>
        )
    }
}
