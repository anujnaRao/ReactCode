import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome'
        }
        
        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Bye!'
    //     })
    // }
    
    clickHandler = () => {
        this.setState({
            message: 'Bye!'
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default EventBind
