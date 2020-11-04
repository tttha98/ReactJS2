import React, { Component } from 'react'

export default class ChildOne extends Component {

    handleReset=()=>{
        this.props.resetUsername("Nguye")
    }

    render() {
        return (
            <div>
                <h3>*ChildOne</h3>
                <p>Username: {this.props.username}</p>
                <button className="btn btn-danger" onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
