import React, { useEffect } from "react";
import {  DATA_CART_REQUEST, REMOVE_PRODUCT_REQUEST } from "../../store/market/marketActionTypes";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.modules.css";
import { Button, Table, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
function Cart() {
  const { cart } = useSelector((state) => state.market);
  const dispatch = useDispatch();
   const [showModal, setShowModal] = useState(false);
   const openModal = () => {
     setShowModal(true);
   };
  useEffect(() => {
    dispatch({
      type: DATA_CART_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT_REQUEST, payload: id });

  };
  // eslint-disable-next-line no-unused-vars
  // const buyingProduct = () => {
  //   dispatch({
  //     type: BOUGHT_PRODUCT_REQUEST,
  //     payload: cart.map()
  //   });
  // };
  
  return (
    <div>
      <label className="h3 m-5">Giỏ hàng</label>
      <div className="row">
        <div className="col-7">
          <Table
            bordered
            className=" text-center "
            style={{ verticalAlign: "middle", marginLeft: 50 }}
          >
            <thead>
              <tr>
                <th style={{ width: 600 }}>Sản phẩm</th>
                <th className="th_custom">Đơn giá</th>
                <th className="th_custom">Số lượng</th>
                <th className="th_custom">Thành Tiền</th>
                <th>
                  <i class="bi bi-trash"></i>
                </th>
              </tr>
            </thead>
            {cart.map((data) => (
              <tbody>
                <tr key={data.id}>
                  <td>
                    <div>
                      <img src={data.image} className="w-25" alt="imgProduct" />
                      <span style={{ fontSize: 14 }}>
                        &nbsp;&nbsp;{data.title}
                      </span>
                    </div>
                  </td>
                  <td>{data.price} $</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <p
                        style={{ width: 20, textAlign: "center", fontSize: 14 }}
                      >
                        {data.count}
                      </p>
                    </ButtonGroup>
                  </td>
                  <td>{(data.count * data.price).toFixed(2)} $</td>
                  <td>
                    <i
                      class="bi bi-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemoveProduct(data.id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
        <div className="col-4 mt-5" style={{ marginLeft: 100 }}>
          <Button
            variant="primary"
            style={{ width: 400 }}
            // onClick={() => {
            //   navigate("/profile");

            // }}
          >
            Sản Phẩm Đã Mua
          </Button>{" "}
          <Button
            variant="danger"
            style={{ width: 400 }}
            className="mt-5"
            onClick={openModal}
          >
            Mua Hàng
          </Button>{" "}
        </div>
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      >
        Bạn có chắc chắn mua những sản phẩm này !
      </Modal>
    </div>
  );
}

export default Cart;
