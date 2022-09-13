import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
  let userName = "Vaibhav";
  let [data, setData] = useState("Vaibhav");
  return (
    <div className="App">
      <h1>{data}</h1>
      <ComponentA userName={userName} data={data} setData={setData} />
    </div>
  );
}

export default App;
