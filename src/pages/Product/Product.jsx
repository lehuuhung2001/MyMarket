import React, { useState } from 'react'
import "./Product.modules.css"
import { Button, ButtonGroup } from "react-bootstrap";
function Product() {
  const [count,setCount] = useState(1)
  const handleMinus = () => {
    setCount(count => count - 1)
  }
  const handlePlus = () => {
    setCount(count => count + 1)
  }
  return (
    <div className="container_">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        className="custom_img"
      ></img>
      <div className="content_left m-3">
        <p>category</p>
        <p>title</p>
        <p>price</p>
        <p>description</p>
        <p>Số lượng</p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={handleMinus}>-</Button>
          <p style={{width: 50,textAlign:'center'}}>{count}</p>
          <Button variant="secondary" onClick={handlePlus}>+</Button>
        </ButtonGroup>
        <div>
          <Button variant="danger" size="lg" className="button_custom">
            Chọn Mua
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product