import React from "react";
import "./table.css";

const Table = ({ title, items, currentPage, itemsPerPage, paginate }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="table-section">
      <div className="table-title">
        <h2>{title}</h2>
      </div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Photo</th>
              <th>Video</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Mobile number</th>
              <th>Event location</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.photo ? "Yes" : "No"}</td>
                <td>{item.video ? "Yes" : "No"}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          className="previous"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
