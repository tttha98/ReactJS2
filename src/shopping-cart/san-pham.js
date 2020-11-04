import React, { Component } from "react";

export default class SanPham extends Component {


  render() {
    console.log(this.props.product)
    const{product}=this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-success" onClick={()=>{console.log(product)
            this.props.getDetailProduct(product)}}>Chi tiết</button>
            <button className="btn btn-danger" onClick={()=>{this.props.addCart(product)}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}