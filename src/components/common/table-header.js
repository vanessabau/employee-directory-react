import React, { Component } from "react";

//CREATE COMPONENT CLASS
//interface of this component
//pass columns: array
//sortColumn: obj
//onSort: function

class TableHeader extends Component {
  // Raise Event
  raiseSort = (path) => {
    // Handle both ascending and descenfing sorting
    // Clone and compare to change sort order, otherwise sort ascending

    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn); //raise sort event
  };

  render() {
    return (
      <thead>
        <tr
          style={{
            fontFamily: "impact",
            fontSize: "1.3em",
            cursor: "pointer",
          }}
        >
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
