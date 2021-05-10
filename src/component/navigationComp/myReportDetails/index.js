import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

function MyReportDetails() {
  const handleClick = (id) => {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  };
  return (
    <div className="body">
      <div className="header">
        <div className="header_left">
          <Link to="/report">
            <img
              src={window.location.origin + "/images/back arrow.svg"}
              alt="arrow"
              className="margin_top"
              height="50px"
              width="50px"
            />
          </Link>
          <p>Back</p>
        </div>
        <div className="header_center">
          <p className="title">onboard merchant</p>
          <p className="dates">date1 - date2</p>
        </div>
        <div className="header_right">
          <img src={window.location.origin + "/images/Search.png"} alt="download" />
          <img src={window.location.origin + "/images/download.png"} alt="download" />
          <div
            className="small_card"
            id="list-items"
            style={{ display: "none" }}
          >
            <p className="drop1">Dates</p>
            <p className="drop2">FSE ID</p>
            <p className="drop3">FSE name</p>
            <p className="drop4">Project name</p>
          </div>
          <img
            src={window.location.origin + "/images/filter.png"}
            id="list"
            alt="filter"
            onClick={(id) => handleClick(id)}
          />
        </div>
      </div>
      <div className="card_box">
        <div className="row">
          <div className="col1">
            <p className="p1">name</p>
          </div>
          <div className="col2">
            <p className="col-21">abhijith</p>
            <p className="col-3">fes name</p>
          </div>
          <div className="col3">
            <p className="col-31">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col4">
            <p className="col-41">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col5">
            <p className="col-51">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col6">
            <p className="col-61">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col7">
            <p className="col-71">date</p>
            <p className="col-3">start date</p>
          </div>
        </div>
        <hr className="hr" />
        <div className="row1">
          <div className="col1">
            <p className="p1">name</p>
          </div>
          <div className="col2">
            <p className="col-21">abhijith</p>
            <p className="col-3">fes name</p>
          </div>
          <div className="col3">
            <p className="col-31">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col4">
            <p className="col-41">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col5">
            <p className="col-51">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col6">
            <p className="col-61">date</p>
            <p className="col-3">start date</p>
          </div>
          <div className="col7">
            <p className="col-71">date</p>
            <p className="col-3">start date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReportDetails;
