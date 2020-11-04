import React, { Component } from 'react'
import ClassProps from "./classProps"
import FunctionProps from "./functionProps"
import ChildrenProps from "./childrenProps"
// import ClassProps from "./classProps"

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "nguyen",
            lop: "FE52",
        };
    };



    render() {
        return (
            <div>
                <h3>*Props</h3>
                <p>Username: {this.state.Username} - Lop: {this.state.lop}</p>
                <button></button>
                <ClassProps username={this.state.Username} Lop={this.state.lop} />
                <FunctionProps username={this.state.Username} Lop={this.state.lop} />
                <ChildrenProps />

                <div>
                    <h5>Demo Children Props</h5>
                    <p>Username</p>
                </div>

            </div>
        )
    }
}
