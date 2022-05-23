import React from "react";
import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div className='App' style={{ color: "red" }}>
      <Card width={"150px"} height={"150px"} variant={CardVariant.outlined}>
        <button>Sell</button>
      </Card>
    </div>
  );
}

export default App;
