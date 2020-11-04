import React, { Component } from 'react'

export default class ExampleListKeys extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangSP: [
                { id: 1, tenSP: "samsung", gia: 5000 },
                { id: 2, tenSP: "HTC", gia: 3000 },
                { id: 3, tenSP: "Iphone", gia: 8000 },
            ],
        };
    };
    renderTable = () => {
        const { mangSP } = this.state;
        return mangSP.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>...</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Gia SP</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}
