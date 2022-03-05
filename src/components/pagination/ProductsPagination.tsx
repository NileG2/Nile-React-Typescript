import React from "react";
import { Pagination } from 'react-bootstrap';

const ProductPagination = () => {
    return (
        <div className="d-flex justify-content-center align-content-center" >
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </div>
    )
}

export default ProductPagination;