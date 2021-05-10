import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { homeCardArr, homeAllProfiles } from "../../dataset";

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
    <div className="body">
      <div className="card_body">
        {homeCardArr.map((obj, idx) => {
          return (
            <>
              <div
                key={idx}
                className="inner_card"
                style={{
                  backgroundImage: `url("${window.location.origin}/images/${obj.imageName}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="homeCardCount">{obj.count}</div>
                <hr />
                <div className="homeCardName">{obj.name}</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="header_table">
        <div className="header_left">All Profiles</div>

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
        {homeAllProfiles.map(
          (
            {
              name,
              jobRole,
              city,
              state,
              pincode,
              date,
              month,
              year,
              time,
              status,
            },
            idx
          ) => {
            return (
              <>
                <div key={idx} className="card_body1">
                  <div className="myCol">
                    <div className="myProfileName">{name}</div>
                    <div className="myJobRole">
                      Job Role : <span className={"myJobRoleValue"}>{jobRole}</span>
                    </div>
                  </div>

                  <div className="myCol">
                    <div className="homeCityStyle">{city}</div>
                  </div>

                  <div className="myCol">
                    <div className="myStateStyle">{state}</div>
                    <div className="homePinStyle">{pincode}</div>
                  </div>

                  <div className="myCol">
                    <div>{`${date} ${month} ${year} ${time}`}</div>
                  </div>
                  
                  <div className={`my${status}`} >{status}</div>

                  <div>
                    <img
                      src={window.location.origin + "/images/call.svg"}
                      alt="call"
                    />
                    <img
                      src={window.location.origin + "/images/message.svg"}
                      alt="message"
                    />
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
      <div className="support">
        <img 
          src={window.location.origin + "/images/support.svg"}
          alt="support"
          
        />
      </div>
      <div className="loadmore">
        <button className="loadmoreBtn">LOAD MORE</button>
        </div>
        
    </div>
  );
}

export default MyHome;
