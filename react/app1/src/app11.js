import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// passing arguement to event handlers
class F2 extends Component{
    state={
        name:'shah',age:56
    }

click1=(age,i,e)=> {
console.log(age,i,e)

}

// click1arg=(e)=>{
// return this.click1(this.state.age,10,e)
// }
render() {
        return <div>
        <h3>hello {this.state.name}, age is {this.state.age} </h3>
        {/* <button onClick={this.click1arg} >click me</button> */}
        <button onClick={(e)=>{
                        return this.click1(this.state.age,20,e) 
                    }} >click me</button>
    
            </div>
}}
export default F2