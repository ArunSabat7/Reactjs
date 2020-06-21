// conditional Rendering

// import React from 'react'
// import App19user from './App19user'

// // export default class App19 extends Component {
// //     render() {
// //         let prime = this.props.prime;
// //         return ( 
// //             <React.Fragment>
// //              <h3>welcome user</h3> 
// //              {true && <App19user/>}
// //             </React.Fragment>
// //         )
// //     }
// // }

// const App19=(props)=>{
//     const prime = props.prime;
//     return (                       // inline if
//         <React.Fragment>  
//          <h3>welcome user</h3>  
//          {prime && <App19user/>}  
//         </React.Fragment>
//     )
// }
// export default App19

// if else
import React, { Component } from 'react'
import App19user from './App19user'
import App19guest from './App19guest'

export default class App19 extends Component {
    state={
        isLoggedIn:false
    }

    clicklogin=()=>{
        this.setState({isLoggedIn:true})
    }
    clicklogout=()=>{
        this.setState({isLoggedIn:false})
    }
    render() {
        const isLoggedIn=this.state.isLoggedIn
    // using if else
    //     if(isLoggedIn){
    //         return <App19user name='js' click1={this.clicklogout} />
    //     }   
    //     else{ 
    //      return <App19guest click2={this.clicklogin}/>
    //         }
    
// alternate of if else, using ternary operator
    //   return (
    //         <>
    //         {isLoggedIn?<App19user name='rome' click1={this.clicklogout} /> : <App19guest click2={this.clicklogin} /> }
    //         </> 
    //         )

// using IIFE, write expr in jsx 
    return (
    <>
    {
        (()=>{
            if(isLoggedIn){
                return <App19user name='js' click1={this.clicklogout} />
            }
        else{
            return <App19guest click2={this.clicklogin}/>
        }
        })()
    }
    </>
)

}
}
