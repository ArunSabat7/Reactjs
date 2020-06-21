import React, { Component } from 'react'
import Army from './App33arm'
 class App33modi extends Component {
    
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hocover} >modi {this.props.hocaircraftname} shots: {this.props.hocshots}</h3>
                <h3>camp:{this.props.camp} </h3>
            </div>
        )
    }
}
export default Army(App33modi,20)