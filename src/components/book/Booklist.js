import React from "react";
import { useAppContenxt } from "../../hook/AuthProvider";
import Pagination from "../pagination/Pagination";
import Book from "./Book";

export default function Booklist() {
  const { currentBooks, loading, error, result } = useAppContenxt();
  if (loading) {
    return <div>loading ...</div>;
  }
  return (
    <section className="book-list">
      <div className="container">
        <h1 className="section-title">{result}</h1>
        <div className="booklists">
          {currentBooks.map((currentEl) => (
            <Book key={currentEl.id} {...currentEl} />
          ))}
          {error || null}
        </div>
        <Pagination />
      </div>
    </section>
  );
}
