import React, { Component } from 'react'
import App39dept from './App39dept'
import App39sal from './App39sal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button } from 'react-bootstrap'
export default class App39emp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'modi',workday:26,workhour:8,chargeperhour:20
        }

    }
    
    changeName=(e)=>{
        const name=e.target.value
        this.setState({name:name})
    }
    changeDay=(e)=>{
        const day=e.target.value
        this.setState({workday:day})
    }
    render() {
        return (
            <div className='container mt-3'>
                    <form >
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>emp name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" value={this.state.name} onChange={this.changeName} />
                      
                    </Form.Group>
                   
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>working days</Form.Label>
                      <Form.Control type="text" placeholder="Enter Working Days" value={this.state.workday} onChange={this.changeDay}/>
                    </Form.Group>
                    
                    <Button variant="danger" type="submit">Submit
                    </Button>
                      
                </form>

                {/* <h3>emp details:-----</h3>
                <h3>name: {this.state.name} </h3>
                <h3>day: {this.state.workday} </h3> */}
                <App39dept name={this.state.name} day={this.state.workday} hours={this.state.workhour} />
                <App39sal name={this.state.name} day={this.state.workday} hours={this.state.workhour} charge={this.state.chargeperhour} />
            </div>
        )
    }
}
