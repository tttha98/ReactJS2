import React, { Component } from 'react'
import ChildOne from "./childOne"
import ChildTwo from "./childTwo"

export default class LiftingStateUp extends Component {
constructor(props){
    super(props);
    this.state={
        username: " nguyen",
    };
}

handleChangeInfo=()=>{
this.state={
    username: "Cybersoft",
}
}

handleResetUsername=(username)=>{
    // console.log(username);
    this.setState({
        username,
    });
}
    render() {
        return (
            <div>
                <h3>*LiftingStateUp</h3>
                <p>Username: {this.state.username}</p>
                <button className="btn btn-info" onClick={this.handleChangeInfo()}>Change info</button>
                <ChildOne username={this.state.username} resetUsername={this.handleResetUsername}/>
                <ChildTwo username={this.state.username}/>
            </div>
        )
    }
}
