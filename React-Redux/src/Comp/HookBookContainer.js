// Redux with React Hooks: prevent using connect function used in BookContainer.js file, uses 2 function useSelector() and useDispatch()

import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Buy} from '../Redux/book/Bookaction'
 function HookBookContainer() {
    const noofbooks=useSelector((state)=>state.noofbooks)
    const dispatch=useDispatch()
    return (
        <div>
            <h2>hook container </h2>
            <h3>no of books:{noofbooks} </h3>
            <button onClick={()=>dispatch(Buy()) } >buy Book</button>
        </div>
    )
}
export default HookBookContainer