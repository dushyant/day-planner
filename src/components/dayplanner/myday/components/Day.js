import React from "react";

const Day = () => {
  return (
    <div className="d-flex justify-content-around day-controls">
      <div>
      {
        ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
          return (
            <button
              type="button"
              key={`${day} + ${index}`}
              className="btn btn-secondary">
              <span > {day} </span>
            </button>
          );
        })
      }
      </div>
    </div>
  );
}

export default Day