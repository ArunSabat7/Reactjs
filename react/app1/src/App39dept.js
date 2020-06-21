import React, { Component } from 'react'

export default class App39dept extends Component {
    render() {
        return (
            <div >
                
                
                <h3 className='font-weight-bold'>dept details:------- </h3>
                <h3>name:{this.props.name} </h3>
                <h3>workday:{this.props.day} </h3>
                <h3>workhours:{this.props.hours} </h3>
                
            </div>
        )
    }
}
