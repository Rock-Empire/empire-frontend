import React from "react";
import _ from "lodash";

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

console.log(currentPage)
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if(pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className='ml-[5rem] pt-[2rem]'>
      <ul className='pagination flex gap-4'>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? 'page-item active bg-[blue] p-2 text-white' : 'page-item p-2'}>
            <p className='page-link' onClick={() => onPageChange(page)}>{page}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
