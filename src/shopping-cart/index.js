import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from './data.json'

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    };
  }

  handleDetailProduct = (product) => {
    // console.log(product);
    {
      this.setState({
        detailProduct: product,
      })
    };
  }

  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item) => {
      return item.maSP === maSP;
    });
  };

  handleAddCart = (product) => {
    /**
     * kt vi tri ton tai trong listCart
     * -tim  vitri
     * neu vi tri khac tru -1
     *  => tim thay => update(cap nhat)
     * nguoc lai
     *  => add (them)
     */
    const index = this._findIndex(product.maSP);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      listCart[index].soLuong += 1;
    } else {
      const productNew = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart = [...this.state.listCart, productNew];
      // console.log(product);
    }


    this.setState({
      listCart,
    });
    console.log(listCart);
  };
  // mangSanPham = ;


  handleDelete = (product) => {
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({
        listCart,
      });
    }
  };

handleTangGiamSL = (product, status)=>{
  const index = this._findIndex(this.product.maSP);
  let listCart = [...this.state.listCart];
  if(index !== -1){
    if(status) {
      //tang sl
      listCart[index].soLuong +=1;
    }else{
      // giam sl
      if(listCart[index].soLuong > 1){
        listCart[index].soLuong -=1;
      }
    }
  }
  
}

total = () =>{
  // let sum =0;
  // this.state.listCart.forEach((item) => {
  //   sum += item.soLuong
  // });
  // return sum;
  this.state.listCart.reduce((a,b)=>{
    return a+b.soLuong;
  }, 0);
}






  render() {
    const { detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.listProduct} getDetailProduct={this.handleDetailProduct}
          addCart={this.handleAddCart} />
        <Modal listCart={this.state.listCart}
            deteleProduct={this.handleDelete}     
            tangGiamSL={this.handleTangGiamSL}
            // gioHang=
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
