import React, { Component } from 'react'
import ItemProduct from "./itemproduct"

export default class Listproduct extends Component {
    render() {
        return (
            <div className="container-fuild pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
        </div>
        )
    }
}
