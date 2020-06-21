// useEffect

import React,{useState, useEffect} from 'react'
const App16=()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(40)

    const click=()=>{
        setCount(count+1)
    }
    const click1=()=>{
        setCount1(count1-1)
    }
    useEffect(()=>{
        console.log('effect called')
    },[count1] )
    return <>
        <h3>countup: {count} </h3>
        <button type='button' onClick={click}>increment</button>
        <h3>countdown: {count1} </h3>
        <button type='button' onClick={click1}>decrement</button>
        </>
}
export default App16