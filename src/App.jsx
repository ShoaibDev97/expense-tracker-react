import React, { Component } from "react";
import Structure from "./components/structure/Structure.jsx";
// import { TransactionContext } from "./context/TransactionContext.js";
class App extends Component {
  render() {
    return (
      <div>
        {/* <TransactionContext.Provider> */}
        <Structure />
        {/* </TransactionContext.Provider> */}
      </div>
    );
  }
}

export default App;
