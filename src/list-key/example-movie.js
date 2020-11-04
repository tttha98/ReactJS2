import React, { Component } from 'react';
import data from "./data.json";

export default class ExampleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: data,
        };
    }

    renderHTML = () => {
        const { movie } = this.state;
        return movie.map((item) => {
            return (
                <div key={item.maPhim} className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.maPhim} title</h5>
                            <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>

                </div>
            )
        })
    }


    render() {

        return (
            <div className="container">
                <h3>...</h3>
                <div className="row">
                    {this.renderHTML()}
                </div>


            </div>
        )
    }
}
