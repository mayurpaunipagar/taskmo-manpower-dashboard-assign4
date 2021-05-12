import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { MyReportDetailsData } from "./../../dataset";

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
      <div className="headerStyle">
      <div className="header mb-3 mt-3">
        <div className="rd-header_left">
          <Link to="/report">
            <img
              src={window.location.origin + "/images/back arrow.svg"}
              alt="arrow"
              className="margin_top"
              height="50px"
              width="50px"
            />
          </Link>
          <div>Back</div>
        </div>
        <div className="header_center"> 
          
          <div className="title mb-3">{MyReportDetailsData.name}</div>
          <div className="grayText">
            {MyReportDetailsData.startDate} - {MyReportDetailsData.endDate}
          </div>
        </div>
        <div className="header_right">
          <img
            src={window.location.origin + "/images/search.svg"}
            alt="download"
          />
          <img
            src={window.location.origin + "/images/download.svg"}
            alt="download"
          />
          <img
            src={window.location.origin + "/images/filter.svg"}
            id="list"
            alt="filter"
            onClick={(id) => handleClick(id)}
          />
          <div
            className="small_card"
            id="list-items"
            style={{ display: "none" }}
          >
            <div className="drop1">Dates</div>
            <div className="drop2">FSE ID</div>
            <div className="drop3">FSE name</div>
            <div className="drop4">Project name</div>
          </div>
          
        </div>
      </div>
      </div>
      <div className="card_box">
        {MyReportDetailsData.details.map(
          (
            {
              fseId,
              fseName,
              projectName,
              startDate,
              endDate,
              totalTaskerEarnings,
              totalCommission,
            },
            idx
          ) => {
            return (
              <>
                <div key={idx} className="row1">
                  <div>{fseId}</div>
                  <div className="center mycol">
                    <div className="col-21">{fseName}</div>
                    <div className="grayText mt-3">FSE Name</div>
                  </div>
                  <div className="center mycol">
                    <div>{projectName}</div>
                    <div className="grayText mt-3">Project Name</div>
                  </div>
                  <div className="center mycol">
                    <div className="col-41">{startDate}</div>
                    <div className="grayText mt-3">Start Date</div>
                  </div>
                  <div className="center mycol">
                    <div className="col-51">{endDate}</div>
                    <div className="grayText mt-3">End Date</div>
                  </div>
                  <div className="center mycol">
                    <div className="col-61">&#8377;{totalTaskerEarnings}</div>
                    <div className="grayText mt-3">Total Tasker Earnings</div>
                  </div>
                  <div className="center mycol">
                    <div className="col-71">&#8377;{totalCommission}</div>
                    <div className="grayText mt-3">Total Commission</div>
                  </div>
                </div>
                {MyReportDetailsData.details.length-1===idx?null:<hr className="hrStyle" />}
              </>
            );
          }
        )}

        {/* <div className="row1">
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
        </div> */}
      </div>
    </div>
  );
}

export default MyReportDetails;
