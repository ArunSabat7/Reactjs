// use image or other assets in react in src folder

import React, { Component } from 'react'
import Pic from './2.jpg'
export default class App24 extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/img/1.jpg'} alt='man' width='300px' /> <br/>
                <img src={Pic} alt='girl' width='300px' />
            </div>
        )
    }
}
