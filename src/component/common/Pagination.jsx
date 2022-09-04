import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css"
function Pagination({pageCount,pageChange}) {
  
  return (
  <ReactPaginate 
   nextLabel=">"
   previousLabel="<"
   pageCount={pageCount}
   pageRangeDisplayed={2}
   onPageChange={pageChange}
   containerClassName={"paginationBttns"}
   disabledClassName={"paginationDisabled"}
   activeClassName={"paginationActive"}
  />  
  )
}

export default Pagination