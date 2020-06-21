// controlled component: textarea element
import React, { Component } from 'react'

export default class App27 extends Component {
    state={
    value:'welcome pm, find out nation'
    }
    change=(e)=>{
    this.setState({
    value:e.target.value.substr(0,10)
    })
    }
    
    render() {
        return (
            <div>
                <form>
                <textarea value={this.state.value} onChange={this.change} />
                </form>
            </div>
        )
    }
}

