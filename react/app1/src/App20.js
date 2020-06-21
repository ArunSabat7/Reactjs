// list

import React, { Component } from 'react'

export default class App20 extends Component {
    render() {
        // const arr=[1,2,3,4]
        const arr=this.props.arr   // using props
//         const newArr=arr.map((num)=>{
//         console.log(num)
//             return <li>{num*10} </li>
// })
//     console.log('old array:', arr)
//     console.log('new array:', newArr)
        // return (
        //     <ul>
        // {newArr}    
        //     </ul>
        // )
// embed map in jsx
    return (
    <ul>
        {
            arr.map((num)=>{
            return <li>{num*10} </li>
            })
        }
    </ul>
    )
    }
}

