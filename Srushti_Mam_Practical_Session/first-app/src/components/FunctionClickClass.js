import React, { Component } from 'react'

export class FunctionClickClass extends Component {
    clickHandler(){
        console.log("Clicked - Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FunctionClickClass