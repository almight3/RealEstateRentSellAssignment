import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({pageCount,pageChange}) {
  
  return (
  <ReactPaginate 
   nextLabel=">"
   previousLabel="<"
   pageCount={pageCount}
   pageRangeDisplayed={2}
   onPageChange={pageChange}
  />  
  )
}

export default Pagination