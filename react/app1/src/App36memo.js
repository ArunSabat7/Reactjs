// React.memo(b)
import React from 'react'

function App36memo(props) {
    console.log('memo comp')
    return (
        <>
         <h3>{props.name} </h3>   
        </>
    )
}
export default React.memo(App36memo)