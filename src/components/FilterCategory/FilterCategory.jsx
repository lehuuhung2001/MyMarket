import React, { useEffect, useState } from "react";
import { DATA_REQUEST } from "../../store/market/marketActionTypes";
import { useDispatch, useSelector } from "react-redux";
import "../../pages/Home/Home.modules.css";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaginationCm from "../Pagination/Pagination";
function FilterCategory({ currentMarket, resultCategory, list }, props) {
  const navigate = useNavigate();
//   const filterCategory = list.filter.includes()
  return (
    <div className="col-10">
      <div className="list_product">
        <Row xs={1} md={3} className="g-4">
          {currentMarket.map((market) => (
            <Col>
              <Card
                style={{
                  width: "18rem",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/product/${market.id}`)}
              >
                <Card.Img
                  variant="top"
                  src={market.image}
                  className="img_product"
                />
                <Card.Body>
                  <Card.Title>{market.title}</Card.Title>
                  <Card.Text style={{ fontSize: 30 }}>
                    {market.price} $
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default FilterCategory;