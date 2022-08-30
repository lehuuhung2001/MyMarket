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
  return (
    <div>
      <label className="m-5 text-primary text-bold h2">SẢN PHẨM</label>
      <div className="list_product">
        <Row xs={1} md={3} className="g-4">
          {currentMarket.map((market) => (
            <Col>
              <Card
                style={{ width: "18rem", border: "none", cursor: "pointer" }}
                onClick={() => navigate("./product")}
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
  );
}

export default Home;
