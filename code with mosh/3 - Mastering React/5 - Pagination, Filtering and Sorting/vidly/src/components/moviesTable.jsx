import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { columnName: "title", label: "Title" },
    { columnName: "genre.name", label: "Genre" },
    { columnName: "numberInStock", label: "Stock" },
    { columnName: "dailyRentalRate", label: "Rate" },
    {
      key: "liked",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => {
            this.props.onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props; //props destructuring
    return (
      <Table
        rows={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
