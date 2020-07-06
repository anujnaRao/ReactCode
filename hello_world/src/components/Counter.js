import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count: 0
        }
    }
    increment(){
    //     this.setState(
    //         {
    //         Count: this.state.Count + 1 
    //     }, 
    //     () => {
    //         console.log('Call Back Value: ', this.state.Count)
    //     }
    // )
    this.setState(prevState => ({
        Count: prevState.Count + 1
    }))
    console.log(this.state.Count)
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
                <div>Count - {this.state.Count}</div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
