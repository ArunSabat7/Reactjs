import React, { Component } from 'react'

// using State

export default class App20state extends Component {
    state={
        users:[
            {id:10,name:'modi',des:'pm'},
            {id:20,name:'nirm',des:'fa'},
            {id:30,name:'shah',des:'hm'}
        ],isLoggedIn:false
    }
    
    
    render() {
        
        // eslint-disable-next-line
        const newUsers =this.state.users.map(num1 => {
            console.log(num1)
            return (
            <h3 key={num1.id}>id: {num1.id}, name: {num1.name}, des: {num1.des} </h3>
            )}
        )
        return (
            <div>
                {newUsers}
            </div>
        )
    }
}

