import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             key: 'value'
        }
    }
    shouldComponentUpdate(){
        return false
    }
    render() {
        return (
            <div>
                dddd
            </div>
        )
    }
}
