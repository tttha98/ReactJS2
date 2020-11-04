import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "npm start";
    lop = "FE52";

    renderInfo = () => {
        return <p>User: {this.username} - Lop: {this.lop}</p>// tra ve giao dien html
    }
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                <p>User: {this.username} - Lop: {this.lop}</p>
                {this.renderInfo()}
            </div>
        )
    }
}
