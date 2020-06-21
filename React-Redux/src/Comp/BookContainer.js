// React redux and connect

import React,{useState} from 'react'
import {Buy} from '../Redux/index'
import {connect} from 'react-redux'
 function BookContainer(props) {
    //  React Redux action payload using useState()
    const [number, setNumber] = useState(1)
    
    return (
        <div>
            <h2>book container</h2>
            <h3>No of Books:{props.noofbooks} </h3>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)} /><br/><br/>
            <button onClick={()=> props.Buy(number)} >buy {number} book</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
return {
    noofbooks:state.noofbooks
}
}
const mapDispatchToProps=(dispatch)=>{
return {
    Buy:function(number){
        dispatch(Buy(number))
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps) (BookContainer)