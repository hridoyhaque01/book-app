import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getBookDetails = async () => {
    try {
      setLoading(true);
      const fetching = await fetch(`https://openlibrary.org/works/${id}.json`);
      const data = await fetching.json();

      if (data) {
        const newData = {
          title: data.title,
          description: data.description || "no description found",
          coverImg: data.covers
            ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
            : "no cover photo found!",
          subject_paleces: data.subject_places,
          subjects: data.subjects,
          subject_times: data.subject_times,
        };
        setBook(newData);
        console.log(newData);
      }

      setLoading(false);
      setError("");
    } catch (err) {
      setBook("");
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    getBookDetails();
    console.log(book);
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <section className="book-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <div className="coverimg">
              <img
                src={book.coverImg ? book.coverImg : "no img found"}
                alt="brain ref"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-8 text-start">
            <div className="content">
              <h1 className="sub-title">{book.title}</h1>
              <p className="description">
                {book.description
                  ? book.description.value || book.description
                  : "no description found"}
              </p>
            </div>
            <p className="mt-3">
              subject places :{" "}
              {book.subject_paleces
                ? book.subject_paleces.map((place) => <span>{place} ,</span>)
                : " no place found"}
            </p>
            <p className="mt-3">
              subjects :
              {book.subjects
                ? book.subjects.map((currentEl) => (
                    <Link to="/">{currentEl},</Link>
                  ))
                : " no subject found"}
            </p>
            <p className="mt-3">
              released time :
              {book.subject_times
                ? book.subject_times.map((currentEl) => (
                    <Link to="/">{currentEl},</Link>
                  ))
                : " no subject released time found"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
