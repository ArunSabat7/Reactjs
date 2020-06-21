import { useState } from 'react'


const App17Cust=()=>{
const [count,setCount]=useState(0)
const incr=()=>{
    setCount(count+1)
}
    return {
        count,incr
    }
}
export default App17Cust