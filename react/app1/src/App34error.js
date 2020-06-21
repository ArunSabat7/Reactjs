// error boundaries
import React, { Component } from 'react'

export default class App34error extends Component {
    state={
        hasError:false
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){
console.log(error,info)
    }
    render() {
        if(this.state.hasError){
            return <h3>image not found</h3>
        }
        return (
            <div> 
            {this.props.children}                
            </div>
        )
    }
}
