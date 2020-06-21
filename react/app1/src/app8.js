import React, { Component } from 'react'

// state
class Stud extends Component{
 
// inside class / without constructor
//     state={
//     name:'usa',age:this.props.age
// }   

// with constructor
constructor(props){
    super(props)
    this.state={
            name:'usa',age:this.props.age    
        }
    }
render(){
    return <h2>hello {this.state.name}, age is {this.state.age} </h2>
}}

export default Stud;