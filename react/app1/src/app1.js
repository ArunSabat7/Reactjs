import React, {Component} from 'react'

// function component
// function Stu(){
//     return <h2>hello modi</h2>
// }
// using  es6
// const Stu = (props) => {
//     return <h2>hello {props.name}</h2>
// }
// export default Stu

// class component
class Stu extends Component{
    render(){
        return <h2>hello {this.props.name} </h2>
    }
}
export default Stu