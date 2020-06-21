// // event handling
// import React, { Component } from 'react'

// // in class component
// class St extends Component{
//     // click= ()=>{
//     //     console.log('clicked',this);
        
//     // }
//     // alternate of arrow function
//     constructor(props){
//         super(props)
//         this.state={
//             name:'russia',age:this.props.age    
//         }
//         this.click=this.click.bind(this)
//     }
//     click(){
//         console.log('clicked',this);
//     }

//     render(){
//             return <div>
// <h3>hello {this.state.name}, age is {this.state.age} </h3>
// <button onClick={this.click} >click me</button>

//         </div>
//     }
// }
// export default St

// in function component
import React from 'react'

const F1=(props)=>{
function click(e){
    e.preventDefault()  // prevent default
    console.log('clicked1');
    
}
return <div>
<h3>hello {props.name} </h3>
{/* <button onClick={click}>click me1</button> */}
<a href='https://www.google.com/' onClick={click}>click me1</a>
</div>

}
export default F1

