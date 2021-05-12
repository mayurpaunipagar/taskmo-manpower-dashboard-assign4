import "./style.css";
import { reportDetails } from "./../../dataset";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

function MyReport() {
  const [option, setOption] = useState();
  const [bar, setbar] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = {
        series: [40,20,20,10,10],
        options: {
          chart: {
            width: "400px",
            type: "pie",
          },
          
          labels: ["Onboard Merchant", "FSE", "Promoters", "Marketing", "Job 5"],
          colors:["#66E4B6","#FF75AE","#A21ACC","#F77AEF","#FFC53C"],
          fill: {
            type: 'gradient',
            
          },
        },
      };

      const barOption = {
        series: [
          {
            name: "Onboard Merchant",
            data: [44, 55, 57, 56, 61, 58],
          },
          {
            name: "FSE",
            data: [76, 85, 101, 98, 87, 105],
          },
          {
            name: "Promoters",
            data: [35, 41, 36, 26, 45, 48],
          },
          {
            name: "Marketing",
            data: [35, 41, 36, 26, 45, 48]
          },{
            name:"Job 5",
            data: [35, 41, 36, 26, 45, 48]
          }
        ],
        options: {
          colors:["#66E4B6","#FF75AE","#A21ACC","#F77AEF","#FFC53C"],
          chart: {
            type: "bar",
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun"
            ],
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands";
              },
            },
          },
        },
      };
      setOption(result);
      setbar(barOption);
      return await result;
    }
    fetchData();
  }, []);

  console.log("Option", option);
  console.log("bar", bar);

  return (
    <div className="body">
      <div className="header1">
        <p>Report Overview</p>
        <img
          src={window.location.origin + "/images/filter.svg"}
          alt="filter"
          height="50px"
          width="50px"
        />
      </div>
      <div className="graph">
        <div className="pieStyle">
        <div className="card_body12">
            {option && (
              <Chart
                options={option.options}
                series={option.series}
                type="pie"
                height={450}
                width={450}
              />
            )}
        </div>
        </div>
        <div className="card_body22">
          {bar && (
            <Chart
              options={bar.options}
              series={bar.series}
              type="bar"
              height={260}
              width={620}
            />
          )}
        </div>
      </div>
      <div className="header1">
        <p>Report Details</p>
      </div>
      <div className="table">
        <Link to="/report/1">
          {reportDetails.map(
            (
              {
                name,
                totalTaskerInvolved,
                totalTaskerEarnings,
                totalCommission,
              },
              idx
            ) => {
              return (
                <>
                  <div className="report-details-card">
                    <div className="rd-name">{name}</div>
                    <div className="rd-mycol">
                      <div className="totalTasker mt-3">{totalTaskerInvolved}</div>
                      <div className="grayText rd-style">Total Tasker Involved</div>
                    </div>
                    <div className="rd-mycol ">
                      <div className="totalTaskerEarnStyle money mt-3">&#8377;{totalTaskerEarnings}</div>
                      <div className="grayText rd-style">Total Tasker Earnings</div>
                    </div>
                    <div className="rd-mycol">
                      <div className="rd-t-commission money mt-3">&#8377;{totalCommission}</div>
                      <div className="grayText rd-style">Total Commission</div>
                    </div>
                    <img className="arrowStyle" src={window.location.origin+"/images/arrow.svg"} alt="arrow"/>
                  </div>
                </>
              );
            }
          )}
          
        </Link>
      </div>
    </div>
  );
}

export default MyReport;
