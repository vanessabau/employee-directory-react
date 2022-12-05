import React, { Component } from "react";
import TableHeader from "../common/table-header";

class EmployeesTable extends Component {
  // Define the column headings to be rendered dynamically
  columns = [
    { path: "firstName", label: "FIRST NAME" },
    { path: "lastName", label: "LAST NAME" },
    { path: "title", label: "TITLE" },
    { path: "dailyRentalRate", label: "RATE/YR" },
    { key: "delete", label: "DELETE EMPLOYEE" },
  ];

  render() {
    const { employees, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.title.name}</td>
              <td>${employee.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => onDelete(employee)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeesTable;
