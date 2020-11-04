import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handlClick = () => {
        console.log(123);
    };

    handlClickParams = (name, lop) => {
        console.log(name, lop);
    }

    render() {
        return (
            <div>
                <h3>*HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handlClick}>Click</button>

                <button className="btn btn-info " onClick={()=>{this.handlClickParams("Tran", "FE")}}>Click params</button> 

                <button className="btn btn-danger" onClick ={()=>{console.log("demo");}}>demo click</button>
            </div>
        )
    }
}
