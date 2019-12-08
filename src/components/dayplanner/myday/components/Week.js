import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Week = () => {
  return (
    <div className="d-flex justify-content-between week-controls">
      <div>
        <button 
          type="button"
          className="btn btn-light btn-lg">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div>
        <p>Date</p>
      </div>
      <div>
        <button 
          type="button"
          className="btn btn-light btn-lg">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Week;