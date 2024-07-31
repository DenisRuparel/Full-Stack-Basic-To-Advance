import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => console.log("Callback is: " + this.state.count))
    //     console.log(this.state.count)
    // }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    reset(){
        this.setState({
            count: 0
        }, () => console.log("Callback is: " + this.state.count))
        console.log(this.state.count)
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        }, () => console.log("Callback is: " + this.state.count))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button> &nbsp;
        <button onClick={() => this.incrementFive()}>incrementFive</button> &nbsp;
        <button onClick={() => this.reset()}>reset</button> &nbsp;
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    )
  }
}

export default Counter