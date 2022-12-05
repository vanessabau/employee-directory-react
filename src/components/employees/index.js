import React, { Component } from "react";
import _ from "lodash";
import Jumbo from "../common/jumbo";
import SearchBox from "../common/search-box";
import Counter from "../common/counter";
import ListGroup from "../common/list-group";
import Pagination from "../common/pagination";
import EmployeesTable from "./employees-table";
import { getEmployees } from "../resources/employee-resources";
import { getTitles } from "../resources/title-service";
import { Paginate } from "../utils/paginate";
import "./style.css";

class Employees extends Component {
  state = {
    employees: [],
    titles: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedTitle: null,
    sortColumn: { path: "lastName", order: "asc" },
  };

  // Define state after mounting
  componentDidMount() {
    const titles = [{ _id: "", name: "ALL EMPLOYEES" }, ...getTitles()];
    this.setState({
      employees: getEmployees(),
      titles,
    });
  }

  // Event Handlers
  handleDelete = () => {
    // Create new array with all the employees except the one the user deleted
    const employees = this.state.employees.filter(
      (emp) => emp._id !== employees._id
    );
    this.setState({
      employees: employees,
    });
  };

  handlePageChange = (page) => {
    // Set the current page property to current page and update the state
    this.setState({
      currentPage: page,
    });
  };

  handleTitleSelect = (title) => {
    // Set selected title to the title the user selects
    // Reset the search query to an empty stringt and current page to 1 for fluid functionality
    this.setState({
      selectedTitle: title,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    // Set the search query to the user input
    // Set the selected title to null and reset current page
    this.setState({
      searchQuery: query,
      selectedTitle: null,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    // Set the state when the user has clicked a header to sort the table data
    this.setState({ sortColumn });
  };

  render() {
    // const { length: count } = this.state.employees;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedTitle,
      searchQuery,
      employees: allEmployees,
    } = this.state;

    // Filter
    // If there is a search query, filter results
    // Otherwise if selected title and its id are both truthy, apply filter
    // Otherwise return all employees

    let filtered = allEmployees;

    if (searchQuery) {
      filtered = allEmployees.filter((emp) => {
        emp.lastName.toLowerCase().startsWith(searchQuery.toLocaleLowerCase());
      });
    } else if (selectedTitle && selectedTitle._id) {
      filtered = allEmployees.filter(
        (emp) => emp.title._id === selectedTitle._id
      );
    } else {
      filtered = allEmployees;
    }

    //SORT
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    //PAGINATE - Target items needed for pagintion
    const employees = Paginate(sorted, currentPage, pageSize);

    return (
      <>
        <Jumbo />

        <div className="container">
          <div className="row">
            <div className="col">
              <Counter />
            </div>

            <div className="col-4">
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <ListGroup
                items={this.state.titles}
                selectedItem={this.state.selectedTitle}
                onItemSelect={this.handleTitleSelect}
              />
            </div>

            <div className="col">
              <EmployeesTable
                employees={employees}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />

              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Employees;
