import React, { Component } from 'react'

export default class App40emp extends Component {
    render() {
        return (
            <div>
                <h2 className={this.props.color} >emp details:</h2>
                <h3>name: {this.props.name}</h3>
                <h3>dept: {this.props.dept}</h3>
                <h3>salary: {this.props.salary}</h3>
            </div>
        )
    }
}
