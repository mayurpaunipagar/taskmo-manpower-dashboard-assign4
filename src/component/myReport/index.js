import "./style.css";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

function MyReport() {
  const [option, setOption] = useState();
  const [bar, setbar] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = {
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: "auto",
            type: "pie",
          },
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        },
      };

      const barOption = {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 350,
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
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
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
          src={window.location.origin + "/images/filter.png"}
          alt="filter"
          height="50px"
          width="50px"
        />
      </div>
      <div className="graph">
        <div className="card_body12">
          <div className="container">
            {option && (
              <Chart
                options={option.options}
                series={option.series}
                type="pie"
                height={260}
                width={360}
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
              width={550}
            />
          )}
        </div>
      </div>
      <div className="header1">
        <p>Report Details</p>
      </div>
      <div className="table">
        <Link to="/report/1">
          <div className="card_body3">
            <p className="col1">name</p>
            <div className="col2">
              <p className="p1">1000</p>
              <p className="p2">Total</p>
            </div>
            <div className="col3">
              <p className="p12">1000</p>
              <p className="p2">Total</p>
            </div>
            <div className="col4">
              <p className="p13">1000</p>
              <p className="p2">Total</p>
            </div>
            <img
              src={window.location.origin + "/images/arrow.png"}
              alt="arrow"
              className="col-md-2"
              height="50px"
              width="50px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MyReport;
