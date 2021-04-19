import React from 'react';
import { Link } from 'react-router-dom';
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  console.log(postsPerPage)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="pagination-container" className="light-theme simple-pagination">
      <ul>
        {pageNumbers.map(number => (
          <li className={number===currentPage ? "active" : ""} key={number}>
               {number===currentPage ? ( <span className={number===currentPage ? "current" : ""}>{number}</span>):
          (<Link className={number!==currentPage ? "page-link" : ""} onClick={()=>paginate(number)}>{number}</Link>)}   
          </li>
        ))}
      </ul></div>
    
  );
};

export default Pagination; 