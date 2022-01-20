import React from "react";
import "./Weather.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control search-input" id="search-input" />
          </div>
          <div className="col-3 p-0">
            <input type="submit" className="btn btn-primary w-100" value="🔍" id="search-button" />
          </div>
        </div>
      </form>
    </div>
  );
}
