// styling component: inline stylesheet

import React, { Component } from 'react'

export default class App22 extends Component {
    state={
        change:false
    }
    click=()=>{
        this.setState({change:true})
    }
    
    render() {
    const btnStyle={
    color:'white',backgroundColor:'red'}
    const t1={
    color:'blue'
}
    const t2={
    fontStyle:'italic'
}

    if (this.state.change){
    btnStyle.backgroundColor='green'
}
    return (
    <>   
    <h3 style={{...t1, ...{backgroundColor:'purple'} }}>welcome pm</h3>
    <h3 style={{...t1, ...t2 }}>welcome pm</h3>
    <h3 style={{...t2, ...{backgroundColor:'cyan'} }}>welcome pm</h3>
    <button onClick={this.click} style={btnStyle}>button</button>
   </> 
    )   
    }}    

