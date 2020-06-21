// update state using setState
import React, { Component } from 'react'

// in class component
class St extends Component{
    // click= ()=>{
    //     console.log('clicked',this);
        
    // }
    // alternate of arrow function
    constructor(props){
        super(props)
        this.state={
            name:'russia',age:this.props.age    
        }
        this.click=this.click.bind(this)
    }
    // update state
    click(){
        this.setState({
         name:'japan',age:'30'
    })
    
    this.setState(function(state,props){
    console.log(state.name);
    console.log(props);
    
})

        console.log('clicked',this);
    }

    render(){
            return <div>
<h3>hello {this.state.name}, age is {this.state.age} </h3>
<button onClick={this.click} >click me</button>

        </div>
    }
}
export default St