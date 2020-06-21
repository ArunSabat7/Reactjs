// styling component: external stylesheet

import React, { Component } from 'react'
import App23user from './App23user'
import Style from './App23.module.css'

// import App23user from './App23user'
export default class App23 extends Component {
    render() {
        // const style=true
        // return (
        //     <>
        //      <h3 className='txt' >welcome shah</h3>   
        //      <App23user name='shah' color={!style?'txt':'txt1'} /> 
        //     </>
        // )

// CSS Module
    return(
    <>
    {/* <h3 className='txt txt1'>hello app</h3> */}
    <h3 className={Style.txt }>hello app</h3>
    <App23user name='shah'  /> 
    </>
    )
    }
}

