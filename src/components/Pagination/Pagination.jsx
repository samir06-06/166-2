import React, { useState } from 'react';
import './Pagination.scss';

const Pagination = ({ pageCount, onPageChange }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePageButtonClick = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  const handlePrevious = () => {
    if (selectedPage > 0) {
      const newPage = selectedPage - 1;
      setSelectedPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (selectedPage < pageCount - 1) {
      const newPage = selectedPage + 1;
      setSelectedPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className='pagination-container'>
        <div className='pagination-buttons'>

      <button
        className='pagination-nav'
        onClick={handlePrevious}
        disabled={selectedPage === 0}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            className={`page-button ${selectedPage === index ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      <button
        className='pagination-nav'
        onClick={handleNext}
        disabled={selectedPage === pageCount - 1}
        >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
          </div>
    </div>
  );
};

export default Pagination;
