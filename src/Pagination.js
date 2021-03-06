// import React from 'react';
// // import { Link } from 'react-router-dom';
// function Pagination() {

//   return (
//     <div id="pagination-container" className="light-theme simple-pagination">
//       <ul>
//         <li  >
//           <span  className="page-link">«</span>
//         </li>
//         <li  className="active">
//           <span  className="current">1</span>
//         </li>
//         <li>
//           <a   className="page-link">2</a>
//         </li>
//         <li>
//           <a   className="page-link">3</a>
//         </li>
//         <li>
//           <a   className="page-link">4</a>
//         </li>
//         <li>
//           <a   className="page-link next">»</a>
//         </li>
//       </ul>
//     </div>
//   )
// }
// export default Pagination;


import React from 'react';
import './App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="pagination-container" className="light-theme simple-pagination">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Pagination;