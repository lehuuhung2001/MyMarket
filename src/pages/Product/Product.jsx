import React, { useState, useEffect} from "react";
import "./Product.modules.css";
import { Button, ButtonGroup } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import { getIdMarkets } from "../../services/market";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_REQUEST } from "../../store/market/marketActionTypes";

function Product() {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const handleMinus = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  const handlePlus = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    getIdMarkets(productId)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  
  const addProduct = () => {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
      payload: {
        title: product.title,
        image: product.image,
        price: product.price,
        count: count
      },
    });
  };
  return (
    <div className="container_">
      {product && (
        <div>
          <div className="container_">
            <div className="content_right">
              <img
                src={product.image}
                alt="picture_product"
                className="h-100 w-100"
              />
            </div>
            <div className="content_left m-3">
              <p style={{ fontSize: 20 }}>Loại sản phẩm: {product.category}</p>
              <p style={{ fontSize: 30 }}>{product.title}</p>
              <p>
                Giá:{" "}
                <span style={{ fontSize: 50, fontWeight: "bold" }}>
                  {product.price} $
                </span>
              </p>
              <p style={{ fontSize: 22 }}>Số lượng</p>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={handleMinus}>
                  -
                </Button>
                <p style={{ width: 50, textAlign: "center", fontSize: 20 }}>
                  {count}
                </p>
                <Button variant="secondary" onClick={handlePlus}>
                  +
                </Button>
              </ButtonGroup>
              <div>
                <Button
                  variant="danger"
                  value={product}
                  size="lg"
                  className="button_custom"
                  onClick={(e) => {
                    addProduct(e);
                  }}
                >
                  Chọn Mua
                </Button>
              </div>
            </div>
          </div>
          <div className="box_description">
            <p style={{ fontSize: 22, fontWeight: "bold" }}>
              Thông Tin Sản Phẩm
            </p>
            <p style={{ fontSize: 20 }} className="description">
              {product.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
