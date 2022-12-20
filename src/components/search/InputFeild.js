import React, { useState } from "react";
import { useAppContenxt } from "../../hook/AuthProvider";
import "./style.css";

export default function InputFeild() {
  const { setSearchTitle } = useAppContenxt();
  const [input, setInput] = useState("");

  const updateTitle = () => {
    setSearchTitle(input);
    setInput("");
  };

  return (
    <div className="searchField">
      <form action="#">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="search book..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            onClick={updateTitle}
            className="common-btn searchbtn"
          >
            <ion-icon name="search-outline" />
          </button>
        </div>
      </form>
    </div>
  );
}
