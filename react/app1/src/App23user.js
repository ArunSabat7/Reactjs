import React, { Component } from 'react'
import Style from './user.module.css'
import Style1 from './App23.module.css'
export default class App23user extends Component {
    render() {
        return (
            <>
             {/* <h2 className='txt1'>hello {this.props.name}</h2>   
             <h2 className={this.props.color} >hello {this.props.name}</h2>    */}
             <h2 className={Style.txt}>hello {this.props.name}</h2>               
             <h2 className={Style1.txt}>hello {this.props.name}</h2>               
            
            </>
        )
    }
}
