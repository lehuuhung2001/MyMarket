import React, { useEffect, useState } from "react";
import { DATA_REQUEST } from "../../store/market/marketActionTypes";
import { useDispatch, useSelector } from "react-redux";
import "./Home.modules.css";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaginationCm from "../../components/Pagination/Pagination";

function Home() {
  const { list } = useSelector((state) => state.market);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [marketPerPage] = useState(9);
  useEffect(() => {
    dispatch({
      type: DATA_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indexOfLastMarket = currentPage * marketPerPage;
  const indexOfFirstMarket = indexOfLastMarket - marketPerPage;
  const currentMarket = list.slice(indexOfFirstMarket, indexOfLastMarket);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const result = [
    ...list.reduce((set, { category }) => {
      set.add(category);
      return set;
    }, new Set()),
  ];
  return (
    <div className="row">
      <div className="col-2">
        <label className="  text-primary text-bold h2">&nbsp; SẢN PHẨM</label>
        <label style={{ fontSize: 20 }}>
          &nbsp;&nbsp;&nbsp;Loại sản phẩm
        </label>
        <br/>
        {result.map((category) => (
          <div>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" style={{ textTransform: "capitalize" }}>
              {" "}
              &nbsp;{category}
            </label>
            <br />
          </div>
        ))}
      </div>
      <div className="col-10">
        <div className="list_product">
          <Row xs={1} md={3} className="g-4">
            {currentMarket.map((market) => (
              <Col>
                <Card
                  style={{ width: "18rem", border: "none", cursor: "pointer" }}
                  onClick={() => navigate(`/product/${market.id}`)}
                >
                  <Card.Img
                    variant="top"
                    src={market.image}
                    className="img_product"
                  />
                  <Card.Body>
                    <Card.Title>{market.title}</Card.Title>
                    <Card.Text>{market.price} $</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <PaginationCm
          marketPerPage={marketPerPage}
          totalMarkets={list.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Home;
