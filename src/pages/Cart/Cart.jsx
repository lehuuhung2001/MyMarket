import React, { useEffect } from "react";
import { DATA_REQUEST} from '../../store/market/marketActionTypes';
import { useDispatch, useSelector } from "react-redux";
import "./Cart.modules.css"

function Cart() {
  const {list} = useSelector((state) => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: DATA_REQUEST,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <label className="m-4">GIỎ HÀNG</label>
      <p>SẢN PHẨM</p>
      <div>
        {list.map((market) => (
          <div key={market.id}>
            <p>{market.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
