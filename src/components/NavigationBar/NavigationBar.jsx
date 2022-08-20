import React from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./NavigationBar.modules.css";
import Login from "../../pages/Login";
import Banner from "../../resource/img/banner.png";
function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="banner">
        <Navbar.Brand href="/">
          <div className="banner">
            <span className="nameshop">FAKESHOP</span>
            <br />
            <img src={Banner} className="h-50 w-50 pb-2"></img>
          </div>
        </Navbar.Brand>
        <InputGroup>
          <Form.Control
            placeholder="Tìm sản phẩm bạn mong muốn"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" id="button-addon2">
            <i class="bi bi-search"></i>
            &nbsp; Tìm kiếm
          </Button>
        </InputGroup>

        <Nav className="me-auto">
          <Nav.Link href="/login">
            <div className="login-cart">
              <i className="bi bi-person-circle"></i>
              &nbsp; Đăng nhập
            </div>
          </Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/cart">
            <div className="login-cart">
              <i className="bi bi-cart"></i>
              &nbsp;Giỏ hàng
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
