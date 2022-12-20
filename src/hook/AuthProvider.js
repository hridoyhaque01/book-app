import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState("book lists");
  const [searchTitle, setSearchTitle] = useState("love");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(15);
  const url = `http://openlibrary.org/search.json?title=${searchTitle}`;
  const getBooks = async () => {
    try {
      setLoading(true);
      const fetching = await fetch(`${url}`);
      const data = await fetching.json();
      if (data) {
        const newBook = data.docs.map((currentEl) => ({
          id: currentEl.key.replace("/works/", ""),
          bookTitle: currentEl.title,
          author: currentEl.author_name[0],
          aditions: currentEl.edition_count,
          published: currentEl.publish_year,
          coverId: `https://covers.openlibrary.org/b/id/${currentEl.cover_i}-L.jpg`,
        }));
        setBooks(newBook);
      } else {
        setBooks([]);
        setResult("no result found");
      }
      setCurrentPage(1);
      setLoading(false);
      setError("");
    } catch (err) {
      setError(err);
      setLoading(false);
      setBooks([]);
      setResult("something is wrong");
    }
  };

  const lastPostIndex = currentPage * bookPerPage;
  const firstPostIndex = lastPostIndex - bookPerPage;
  const currentBooks = books.slice(firstPostIndex, lastPostIndex);
  const totalBooks = books.length;

  useEffect(() => {
    getBooks();
  }, [searchTitle]);

  const value = {
    books,
    setSearchTitle,
    loading,
    error,
    result,
    bookPerPage,
    totalBooks,
    setCurrentPage,
    currentPage,
    currentBooks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContenxt = () => useContext(AppContext);
