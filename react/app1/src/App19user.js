// import React from 'react'

// export default class App19user extends Component {
//     render() {
//         return 
//         <h3>prime member</h3>
//     }
// }
// const App19user=()=>{
//     return <h3>prime member</h3>
// }
// export default App19user

// if else
 import React, { Component } from 'react'
 
 export default class App19user extends Component {
     render() {
         return (
             <div>
              <h3>welcome {this.props.name}</h3>   
             <button onClick={this.props.click1}>logout</button>
             </div>
         )
     }
 }
 
