import React, { Component } from "react";

const stickyFooterStyle = {
  backgroundColor: "#D3D3D3",
  fontSize: "13px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

export default class Footer extends Component {
  render() {
    return (
      <div>
        <h3>footer</h3>
      </div>
    );
  }
}
