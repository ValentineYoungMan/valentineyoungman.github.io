import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  // console.log(items.length);

  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={10}
      pageCount={Math.ceil(100 / 16)}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
