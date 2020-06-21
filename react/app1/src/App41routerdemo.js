// React Routing

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App41routerdemo extends Component {
    render() {
        return (
            <div>
                <Router>
                    <>
                    {/* <ul>
                     <li><Link to='/'>home</Link></li>
                     <li><Link to='/a'>about us</Link></li>
                     <li><Link to='/s'>services</Link></li>
                     <li><Link to='/c'>contact</Link></li>
                     </ul> */}

                    {/* <Switch>
                    <Route exact path='/' component={App41home}  />
                    <Route path='/a' component={App41about}  />
                    <Route path='/a' component={App41services}  />
                    <Route path='/c' component={App41Contact}  />
                    <Route component={page} />
                    </Switch> */}
                    <Header/>
                    <CustRoute/>
                    </>
                </Router>
            </div>
        )
    }
}
function Header(){
    return(
        <>
        <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to={{pathname:'/a'}} >about us</Link></li>
        <li><Link to='/s'>services</Link></li>
        <li><Link to='/c'>contact</Link></li>
        </ul>
        </>
    )
}
function CustRoute(){
    return(
        <>
        <Switch>
        <Route exact path='/' component={App41home}  />
        <Route path='/a' component={App41about}  />
        <Route path='/s' component={App41services}  />
        <Route path='/c' component={App41Contact}  />
        <Route component={page} />
        </Switch>
        </>
    )
}

function App41about(props) {
    console.log(props)
    return (
        <div>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit ipsam itaque, quisquam velit maiores?</p>
        </div>
    )
}
function App41home() {
    return (
        <div>
            <h3>Home</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit ipsam itaque, quisquam velit maiores?</p>
        </div>
    )
}

// Nested Routing

function App41services({match,history,location}) {
    // console.log(match)
    // console.log(history)
    // console.log(location)
    return (
        <div>
            <h3>services</h3>
            <ul>
                <li><Link to={`${match.path}/python course`} > python course </Link></li>
                <li ><Link to={`${match.path}/frontend course`}>frontend course </Link></li>
                <li><Link to={`${match.path}/backend course`}> backend course</Link></li>
                <li><Link to={`${match.path}/devops course`}>devops course</Link></li>
            </ul>
            <Switch>
            <Route path={`${match.path}/:dynamic`} component={Services}  />
            </Switch>
        </div>
    )
}
function Services({match}){
    console.log(match)
    if(match.params.dynamic==='python course'){
        return (
      <>
            <h3>Services: {match.params.dynamic} </h3>    
            <p>basic, advanced python, django, pandas, numpy, data science</p>
        </>
        )
    }else{
    return(
        <h3>Services: {match.params.dynamic} </h3>

    )}
}

function App41Contact(){
    return (
        <>
        <h3>Contact Us</h3>
    <ul>
        <li>emailid</li>
        <li>Contact</li>
    </ul>
    </>
        )
}
function page(){
    return (
        <div>
        <h3>page not found</h3>
        <h2>OOPS!</h2>
        </div>
    )
}
export default App41routerdemo