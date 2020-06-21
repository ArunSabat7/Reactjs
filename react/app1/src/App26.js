// controlled component: input element

import React, { Component } from 'react'
export default class App26 extends Component {
    state={
        value:'modi1'
    }
    change=(e)=>{
    console.log(e.target.value)
    this.setState({
        value:e.target.value.toUpperCase().substr(0,5)
    })
    }

    render() {
        return (
            <>
             <form>
            <h3>contolled by react</h3> 
            {/* <input type='text' defaultValue='modi'/> */}
            <input type='text' value={this.state.value} onChange={this.change} />
            </form>   
            </>
        )
    }
}
