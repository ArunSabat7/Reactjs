import React, { Component } from 'react'

// children in jsx
// const H=(props)=>{
//     return <h2>hello shah {props.children} </h2>
// }
// export default H

class C extends Component{
    render(){
        return <h2>hello raj {this.props.children} </h2>
    }
}
export default C