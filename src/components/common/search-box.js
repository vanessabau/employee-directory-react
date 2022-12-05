import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-container">
      <form className="search">
        <div className="form-group">
          <input
            type="text"
            name="query"
            value={value}
            className="form-control"
            placeholder="Search by last name"
            //Target text area to define parameters of search
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <button type="submit" className="btn btn-warning btn-sm m-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
