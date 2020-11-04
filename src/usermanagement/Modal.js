import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
    /**
     * contructor chay 1 lan duy nhat
     */
    console.log("contructor")
  }
  /**chay khi nhan 1 props tu component cha truyen vao (chya nhieu lan) */
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      })
    }
  }
  // thay doi khi nhap thong tin
  handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      console.log(this.state);//kiem tra state
    })

  }


  handleSubmit = (event) => {
    //khong load lai trang
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
  }
  render() {

    const { userEdit } = this.props
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* onSubmit= trang se bi load lai, cho phep nhan enter thay cho click */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control"
                    value={this.state.name}
                    name="name" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control"
                    value={this.state.email}
                    name="email" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control"
                    value={this.state.phoneNumber}
                    name="phoneNumber" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control"
                    value={this.state.type}
                    name="type" onChange={this.handleOnChange}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success" >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
