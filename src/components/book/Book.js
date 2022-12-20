import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Book({ ...book }) {
  return (
    <Link to={`/details/${book.id}`} className="single-book">
      <div className="cover-img">
        <img
          src={book.coverId || "no cover image found"}
          alt="brain refreshing"
          className=""
        />
      </div>
      <div className="book-details">
        <h2>
          {book.bookTitle.length > 26
            ? `${book.bookTitle.slice(0, 28)}...`
            : book.bookTitle}
        </h2>
        <h3>{book.author}</h3>
      </div>
    </Link>
  );
}
