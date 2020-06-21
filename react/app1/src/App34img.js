import React, { Component } from 'react'

export default class App34img extends Component {
    render() {
    if(this.props.g==='noImage'){
    throw new Error('image not found')
}
        return (
            <>
             <img src={this.props.g} alt='pic' width='300px'/>   
            </>
        )
    }
}
