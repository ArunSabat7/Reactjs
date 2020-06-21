import React, { Component } from 'react'

export default class App13st extends Component {
    constructor(props){
        super(props)
        this.state={
            stid:this.props.id
    }
    
    }
    static getDerivedStateFromProps(props,state){
        console.log('get derived state from props');
        console.log(props,state)
        if(props.id !== state.stid){
            return {stid:props.id}
        }
    return null
    }
    
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.stid<108){
        console.log('should component update');
        console.log(nextProps,nextState);
    return true
    }
    console.log(nextProps,nextState);
    return false
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('get snapshot-runs before update');
        console.log(prevProps,prevState);
        return 20
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('component did update-runs after update');
        console.log(prevProps,prevState,snapshot);
    }
    render() {
        console.log('child rendered');
        
        return (
            <div>
            <h3>{this.state.stid} </h3>    
            </div>
        )
    }
}
