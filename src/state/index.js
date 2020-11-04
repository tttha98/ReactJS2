import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Nguyen",
            isLogin: false,
        }
        // this.handleLogin = this.handleLogin.bind(this);
    }

    // username = "Nguyen";
    // isLogin = false;

    handleLogin = () => {

        this.setState({
            isLogin: true,
        },() => {console.log(this.state.isLogin);} );
    }
    //     // () => {console.log(this.state.isLogin);
    // }
    // ham setState la ham bat dong bo
        // onclick han console.log chay truoc sau do den handleLogin

        // khai nien DOM ao??  bind

    // Ham khoi chay chi chya 1 lan
    
    handleLogin( ){
        this.setState({
            isLogin: true,
        });
    }    

    renderHTML = () => {
        return this.state.isLogin ? <p>Hello {this.state.username}</p> : (<button className="btn btn-success" onClick={this.handleLogin}>Login</button>);
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3>*State</h3>
                {this.renderHTML()}
            </div>
        )
    }
    //     render() {
    //         return (
    //             <div>
    //                 <h3>*EmxampleHandlingEvent</h3>
    //                 {this.renderHTML()}
    //             </div>
    //         );
    //     }
}
