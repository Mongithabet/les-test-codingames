import React, { Component } from 'react'

export class MyComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             key:'value'
        }
    }
    shouldComponentUpdate(){
        return false
    }
    render() {
        return (
            <div>
             heloo   
            </div>
        )
    }
}

export default MyComponent
