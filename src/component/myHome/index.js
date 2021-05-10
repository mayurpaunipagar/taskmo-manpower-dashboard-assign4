import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

function MyHome() {
  const handleClick = (id) => {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  };

  return (
    <div className="mybody">
      <div className="card_body">
        <div className="inner_card">
          <h1>123</h1>
          <hr />
          <h4>body</h4>
        </div>
        <div className="inner_card">
          <h1>123</h1>
          <hr />
          <h4>body</h4>
        </div>
        <div className="inner_card">
          <h1>123</h1>
          <hr />
          <h4>body</h4>
        </div>
        <div className="inner_card">
          <h1>123</h1>
          <hr />
          <h4>body</h4>
        </div>
      </div>
      <div className="header_table">
        <div className="header_left">
          <h1>All Profiles</h1>
        </div>

        <div className="header_right1">
          <div
            className="small_card1"
            id="list-items"
            style={{ display: "none" }}
          >
            <p className="drop1">Place</p>
            <p className="drop2">lead added</p>
            <p className="drop3">lead onboarded</p>
            <p className="drop4">lead registered</p>
            <p className="drop5">pincode</p>
          </div>
          <div className="buttons1">
            <img
              src={window.location.origin + "/images/filter.png"}
              id="list"
              alt="filter"
              onClick={(id) => handleClick(id)}
            />
            <img
              src={window.location.origin + "/images/download.png"}
              alt="download"
            />
            <Link to="/new-profile">
              <img
                src={window.location.origin + "/images/add employe.png"}
                alt="add"
                className="imageHover"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="main_table">
        <div className="card_body1">
          <div className="name col-2">
            <p>Name</p>
            <div className="ro">
              <p style={{ color: " #9FA2B4", fontSize: "12px" }}>job role:</p>
              &nbsp;
              <p className="role" style={{ fontSize: "12px" }}>
                name
              </p>
            </div>
          </div>
          <div className="col-2">
            <h3 style={{ color: "#838383", textTransform: "capitalize" }}>
              hydrabad
            </h3>
          </div>
          <div className="col-2">
            <h3 style={{ color: " #525252" }}>state</h3>
            <p style={{ color: " #B3B3B3", fontSize: "12px" }}>pincode</p>
          </div>
          <div className="col-2">
            <div className="ro" style={{ color: " #494646" }}>
              <p>data</p>&nbsp;
              <p>time</p>
            </div>
          </div>
          <div className="col-2" style={{ marginTop: "20px" }}>
            <input type="submit" value="Fetch" className="button_option" />
          </div>
          <div className="col-2">
            <img src={window.location.origin + "/images/call.png"} alt="call" />
            <img
              src={window.location.origin + "/images/message.png"}
              alt="message"
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src={window.location.origin + "/images/load more.png"}
          alt="loadmore"
          className="loadmore"
        />
        <img
          src={window.location.origin + "/images/support.png"}
          alt="support"
          className="support"
        />
      </div>
    </div>
  );
}

export default MyHome;
