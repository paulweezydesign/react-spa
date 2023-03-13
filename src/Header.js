// To be continued
// REFERENCE: https://react-bootstrap.netlify.com/components/navs/

import React, { Component } from "react";
import { Bootstrap, Nav, Container, Grid, Row, Col } from "react-bootstrap";

const stickyHeaderStyle = {
  backgroundColor: "#D3D3D3",
  fontSize: "13px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "inline",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/topics">Active</Nav.Link>
          </Nav.Item>

          <Col sm={12}>
            &copy; Copyright 20120 - 2021 East Vail Tech |
            eastvailtech@gmail.com | (858) 260-8556 |
            <a href="https://www.GOOGLE.com" target="_blank">
              (CompanyName)
            </a>
          </Col>
        </Nav>
      </Container>
    );
  }
}

<Nav activeKey="/home"; onSelect={'selectedKey' => alert(`selected ${selectedKey}`)}>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>;
