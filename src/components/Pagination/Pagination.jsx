import Pagination from "react-bootstrap/Pagination";

function PaginationCm({marketPerPage, totalMarkets, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMarkets/marketPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <Pagination>
      {pageNumbers.map(number => (
        <Pagination.Item onClick={() => paginate(number)}>{number}</Pagination.Item>
      ))}
    </Pagination>
  );
}

export default PaginationCm;
