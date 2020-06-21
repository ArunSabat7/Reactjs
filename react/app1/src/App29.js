// uncontrolled Component: using Ref    

import React, { Component } from 'react'

export default class App29 extends Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        // creating ref
        this.input=React.createRef()
    }
    componentDidMount=()=>{
        console.log(this.input.current)
        this.input.current.focus()
    }

    submit=(e)=>{
        e.preventDefault() 
        console.log(this.input.current.value)
        this.setState({value:this.input.current.value})
    }
    render() {
        
        // return (
        //     <>
        //     <form>
        //     name: <input type='text'/><br/><br/>
        //     pass: <input type='text' ref={this.input} /><br/><br/>
        //     Address: <input type='text'/>
        //     </form>   
        //     </>
        // )
    return (
        <>
        <h3>type: {this.state.value} </h3>
        <form onSubmit={this.submit} >
        input: <input type='text' ref={this.input}/>
        <input type='submit' value='submit'/>

        </form>
        </>
    )
    
    }
}
