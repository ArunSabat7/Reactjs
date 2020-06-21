import React, { Component } from 'react'

export default class Appsal extends Component {
    render() {
        return (
            <div>
                <h3 className='font-weight-bold'>salary details:---------</h3>
                {/* {/* <h3>name:{this.props.name} </h3> */}
                <h3>workday:{this.props.day} </h3>
                <h3>workhours:{this.props.hours} </h3>
                <h3>chargeperhour:{this.props.charge} </h3>
                <h3>totalhours:{this.props.day*this.props.hours} </h3>
                <h3>totalsalary:{this.props.day*this.props.hours*this.props.charge} </h3>
            </div>
        )
    }
}
