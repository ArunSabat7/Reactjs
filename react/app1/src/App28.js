// control multiple input element 
import React, { Component } from 'react'

export default class App28 extends Component {
    state={
        name:'modi',pass:'1234'
    }
        change=(e)=>{
        // console.log(e.target.name)
        // this.setState({[e.target.name]:e.target.value})

        const value = e.target.name==='pass' ? e.target.value.toUpperCase().substr(0,10):e.target.value
        this.setState({[e.target.name]:value})
        }
    
    submit=(e)=>{
    console.log(e)
    console.log(e.target[0].value)
    console.log(e.target[1].name)
    e.preventDefault()    
}
    render() {
        return (
            <>
             <form onSubmit={this.submit} >
                 <label>
                     name: <input type='text' value={this.state.name} onChange={this.change} name='name'/>
                 </label><br/><br/>
                 <label>
                     pass: <input type='text' value={this.state.pass} onChange={this.change} name='pass'/>
                 </label><br/><br/>
                 <button type='submit'>
                    submit
                 </button>
                 </form>   
            </>
        )
    }
}
