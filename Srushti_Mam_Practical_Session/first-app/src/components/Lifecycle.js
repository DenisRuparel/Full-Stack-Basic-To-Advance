import React, {Component} from "react";
class Lifecycle extends Component{
    constructor(props){
        super(props)

        this.state = {
            dept : "CSE"
        }
        console.log("LifecycleA Constructor")
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log("LifecycleA getDerviedStateFromProps")
    //     return null
    // }

    componentDidMount() {
        console.log("LifecycleA ComponentDid mount")
    }

    // shouldComponentUpdate(){
    //     console.log("LifecycleA shouldComponentUpdate")
    //     return null;
    // }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")  
        return null;     
    }
    
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")  
    }

    changeState(){
        this.setState({
            dept: "CSPIT"
        })
    }

    render() {
        console.log("Render Method") 
        return (
            <div>
                LifecycleA - {this.state.dept}
                <button onClick={() => this.changeState()}>Change State</button>
            </div>
        )
    }
}

export default Lifecycle