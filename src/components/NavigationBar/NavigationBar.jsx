import React from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./NavigationBar.modules.css";
import Banner from "../../resource/img/banner.png"
import { NavLink } from "react-router-dom";

import * as types from "../../store/auth/authActionTypes";
function NavigationBar() {
const { user } = useSelector((state) => state.auth);
const dispatch = useDispatch();

const handleLogout = () => {
  dispatch({
    type: types.LOGOUT_REQUEST,
  });
};

  return (
    <Navbar bg="primary" variant="dark">
      <Container className="banner">
        <NavLink to="/" style={{textDecoration:"none"}}>
          <div className="banner">
            <span className="nameshop">FAKESHOP</span>
            <br />
            <img src={Banner} alt="banner" className="banner"/>
          </div>
        </NavLink>
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
        <div className="nav_header"></div>
          {user ? (
            <Nav className="me-auto" onClick={handleLogout}>
              <NavLink to="/" className="login-cart">
                <i className="bi bi-person-circle"></i>
                &nbsp; Đăng xuất
              </NavLink>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <NavLink to="/login" className="login-cart">
                <i className="bi bi-person-circle"></i>
                &nbsp; Đăng nhập
              </NavLink>
            </Nav>
          )}

          <Nav className="me-auto">
            <NavLink to="/cart" className="login-cart">
              <i className="bi bi-cart"></i>
              &nbsp;Giỏ hàng
            </NavLink>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
