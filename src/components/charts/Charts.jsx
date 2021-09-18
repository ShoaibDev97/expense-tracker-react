import React, { Component } from "react";
import "./Charts.css";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="chart-header">Monthly Expense Till Now 9/7/2021</h2>
        <div className="toggle-btn-container">
          <button className="toggle-income-btn active">Income</button>
          <button className="toggle-expense-btn">Expense</button>
        </div>
        <div className="chart-container">
          asd
          <Doughnut data={data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Charts;
