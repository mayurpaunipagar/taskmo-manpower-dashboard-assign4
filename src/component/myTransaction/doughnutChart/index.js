import React from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends React.Component {
  render() {
    let data = [32000, 62000, 30000];
    let labels = ["Released", "Total", "Available", "test4"];

    let customLabels = labels.map((label, index) => `${label}: ${data[index]}`);

    const chartdata = {
      labels: customLabels,
      datasets: [
        {
          label: "Markets Monitored",
          backgroundColor: [
            "#F96D7F",
            "#A586F7",
            "#FCB059"
          ],
          data: data
        }
      ]
    };
    return (
      <div style={{backgroundColor:"white",padding:"20px 100px",borderRadius:"20px"}}>
        <Doughnut
        data={chartdata}
        options={{
          legend: { display: true, position: "right" },

          datalabels: {
            display: true,
            color: "white"
          },
          tooltips: {
            backgroundColor: "#5a6e7f"
          }
        }}
      />
      </div>
      
    );
  }
}

export default DoughnutChart;
