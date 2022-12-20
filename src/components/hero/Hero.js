import React from "react";
import { book } from "../../images/Image";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <img src={book} alt="brain refresh" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="hero-content">
              <h1 className="title">
                Books were <span>safer</span> than other people anyway.
              </h1>
              <p>
                I qualify it as pathetic. Pathetic--because despite the
                insatiable fire of my venereal appetite, I intended, with the
                most fervent force and foresight, to protect the purity of that
                twelve-year-old child.
              </p>
              <button type="button" className="common-btn read-btn">
                read book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
