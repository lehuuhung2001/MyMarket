import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  DATA_BOUGHT_REQUEST, REMOVE_BOUGHT_REQUEST } from '../store/market/marketActionTypes';
import {  Table } from "react-bootstrap";
function Profile() {
  const { bought } = useSelector((state) => state.market);
const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DATA_BOUGHT_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveProduct = (id) => {
    dispatch({ type: REMOVE_BOUGHT_REQUEST, payload: id });
  };
  
  return (
    <div>
    <label>Sản Phẩm Đã Mua</label>
      <div className="col-7">
        <Table
          bordered
          className=" text-center "
          style={{ verticalAlign: "middle", marginLeft: 50 }}
        >
          <thead>
            <tr>
              <th></th>
              <th style={{ width: 600 }}>Sản phẩm</th>
              <th >Đơn giá</th>
              <th >Số lượng</th>
              <th >Thành Tiền</th>
              <th>
                <i class="bi bi-trash"></i>
              </th>
            </tr>
          </thead>
          {bought.map((data) => (
            <tbody>
              <tr key={data.id}>
                <td>{data.id}</td>
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
    </div>
  );
}

export default Profile