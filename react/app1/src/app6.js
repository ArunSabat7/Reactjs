import React, { Component } from 'react'
import PropTypes from 'prop-types'

// props using function comp

// const Fu=(props)=>{
// return <div>
//         <h3>Welcome: {props.name} </h3>
//         <p>id is: {props.id} </p>

//     </div>
// }
// export default Fu

// props using class comp

class Cu extends Component{
    render(){
        return <div>
              <h3>Welcome: {this.props.name} </h3>
             <p>id is: {this.props.id} </p>
                </div>
    }
}
// typechecking with props
Cu.propTypes={
    name:PropTypes.string.isRequired,
    id:PropTypes.number
}
Cu.defaultProps={
    name:'shah'
}

export default Cu



