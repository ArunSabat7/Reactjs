// HOC
import React, { Component } from 'react'
const Army=(Name,shot)=>{
class newName extends Component{
    state={
        shots:0
    }
    over=()=>{
        this.setState({shots:this.state.shots+shot})
    }
    render() {
        console.log(this.props.camp)
        return (
            <>
             <Name hocaircraftname='f35' hocshots={this.state.shots} hocover={this.over} {...this.props} />   
            </>
        )
    }
}
return newName
}
export default Army