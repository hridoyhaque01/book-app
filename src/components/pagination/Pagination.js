import React from "react";
import { useAppContenxt } from "../../hook/AuthProvider";
import "./style.css";

export default function Pagination() {
  const buttons = [];
  const { bookPerPage, totalBooks, setCurrentPage, currentPage } =
    useAppContenxt();
  for (let i = 1; i < Math.ceil(totalBooks / bookPerPage); i++) {
    buttons.push(i);
  }

  return (
    <div className="pagination d-flex justify-content-center">
      <button
        type="button"
        className="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      {buttons
        ? buttons.map((button, index) => (
            <button
              type="button"
              key={index}
              className={`pageBtn ${button === currentPage ? "active" : ""}`}
              onClick={() => setCurrentPage(button)}
            >
              {button}
            </button>
          ))
        : ""}
      <button
        type="button"
        className="prev"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === buttons.length}
      >
        next
      </button>
    </div>
  );
}
