import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    username = "Nguyen";
    isLogin = false;
    /**
     * isLogin = false => chua login
     * isLong = true => login
     */

     handleLogin = () => {
         console.log(this.isLogin);
        this.isLogin = true;
        console.log(this.isLogin);
     }

    renderHTML = () => {
        return this.isLogin ? <p>Hello {this.username}</p> : (<button className="btn btn-success" onClick={this.handleLogin}>Login</button>);

        // if(!this.isLogin){
        //     return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
        // }else{
        //     return <p>Hello {this.username}</p>;
        // }

        return(
            <div>
                <p>Hello {this.username}</p>
                <button className="btn btn-success">Login</button>
            </div>
            // su dung the ao <> </> de ngang hang voi the truoc do khi goi this
        );
    };

    render() {
        return (
            <div>
                <h3>*EmxampleHandlingEvent</h3>
                {this.renderHTML()}
            </div>
        );
    }
}

// toan tu 3 ngoi
/**
 * dk ? "dung" : "sai"
 */
