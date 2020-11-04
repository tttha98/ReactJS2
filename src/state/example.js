import React, { Component } from 'react'

export default class ExampleCar extends Component {
    constructor(props){
        super(props);
        this.state ={
            img: "./img/imgRedCar.jpg",
        };
    }

    handleColor = (img) => {
        // console.log(img);
        this.setState({
            img,
        })
    }

    render() {
        const{img} = this.state;
        return (
            <div className="container">
                <h3>*ExampleCar</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger mr-3" onClick={()=>{this.handleColor("./img/imgRedCar.jpg")}}>RedColor</button>
                        <button className="btn btn-light mr-3" onClick={()=>{this.handleColor("./img/imgSilverCar.jpg")}}>Silver Color</button>
                        <button className="btn btn-dark" onClick={()=>{this.handleColor("./img/imgBlackCar.jpg")}}> Black Color</button>
                    </div>
                </div>
            </div>
        );
    };
}
