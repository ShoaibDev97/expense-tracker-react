import React, { Component } from "react";
import "./Entry.css";
class Entry extends Component {
  render() {
    return (
      <div className="">
        <div className="form-container">
          <h3>Perform Transaction</h3>
          <input type="date" />
          <input type="number" />
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div className="transaction-type">
            <button>Income</button>
            <button>Expense</button>
          </div>
          <button>Add Transaction</button>
        </div>
      </div>
    );
  }
}

export default Entry;
