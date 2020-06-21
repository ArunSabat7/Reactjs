    import React, {Component,Fragment} from "react";
    
// using element
// let hi=React.createElement('h3',null,'typecheck')

// using component
    class App extends Component {
        render() {
            // return React.createElement('h3',null,'typecheck')
            // return <div>
            //     <h2>Welcome</h2>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deleniti.</p>
            // </div>;
            
  // using fragments
//    return <React.Fragment>
//            <h3>hello</h3>
//           <p>japan</p>
//          </React.Fragment>
//    return <Fragment>
//            <h3>hello</h3>
//            <p>japan</p>
//           </Fragment>

return  <>
        <h3>hello</h3>
           <p>china</p>
        </>
}
    }

    export default App;