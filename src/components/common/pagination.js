import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  //Create an array of page numbers and use the map method to map each item to an <li>, then render the page number dynamically to create our pagination
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  // Roud decimals to the next integer
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // If there is only one page so not render pagination
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {/* Take each page and map it to the following format */}
        {pages.map((page) => (
          <li
            key={page}
            //Dynamically render the state as active when the li is clicked
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            {/* eslint-disable-next-line */}
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Pagination;
