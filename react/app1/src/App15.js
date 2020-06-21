// useState: allow us to use State in func component, it returns two value as an array, 1.current state value  and 2.updated value using event handler 

import React,{useState} from 'react'

const App15=()=>{
    // const namestateVariable= useState('raj')
    // const name=namestateVariable[0]
    // const setName=namestateVariable[1]
    const [name,setName]=useState('raj1')  // using array destructuring
    const [id,setId]=useState(20)
    
    const click=()=>{
    setName('modi1')
    setId(30)
    }
    return <>
        <h3>{name} </h3>
        <h3>{id} </h3>
        <button type='button' onClick={click}>change</button>
        </>
}
export default App15