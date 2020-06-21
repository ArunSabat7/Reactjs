import React from 'react'
import useApp17Cust from './App17Cust'

const App17=()=>{
    const data=useApp17Cust()
    const data1=useApp17Cust()
    return <>
    <h3>{data.count}</h3>
    <button type='button' onClick={data.incr}>change</button>
    <h3>{data1.count}</h3>
    <button type='button' onClick={data1.incr}>change</button>
    </>
}
export default App17