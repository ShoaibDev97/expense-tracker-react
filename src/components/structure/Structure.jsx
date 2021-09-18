import React, { Component } from "react";
import Charts from "../charts/Charts";
import History from "../history/History.jsx";
import Entry from "../Entry/Entry";
import "./Structure.css";
class Structure extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-12 " style={{ height: "50vh" }}>
                <Charts />
              </div>
              <div className="col-lg-12 " style={{ height: "50vh" }}>
                <History />
              </div>
            </div>
          </div>
          <div className="col-lg-5" style={{ backgroundColor: "rgb(104, 161, 218)", height: "100vh" }}>
            <Entry />
          </div>
        </div>
      </div>
    );
  }
}

export default Structure;
