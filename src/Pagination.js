import React from 'react';
// import { Link } from 'react-router-dom';
function Pagination() {
  return (
    <div id="pagination-container" className="light-theme simple-pagination">
      <ul>
        <li  className="active">
          <span  className="current prev">«</span>
        </li>
        <li  className="active">
          <span  className="current">1</span>
        </li>
        <li>
          <a href="#page-2"  className="page-link">2</a>
        </li>
        <li>
          <a href="#page-2"  className="page-link next">»</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;