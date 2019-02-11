import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

// import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [counts, addCount] = useState([]);

  const incrementCount = increment => {
    setCount(count + increment);
  };
  const reset = () => {
    setCount(0);
  };
  const saveCount = value => {
    // counts.push(count);
    addCount([...counts, count]);
  };
  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <br />
      <Button increment={-1} onClickFunction={incrementCount} />
      <Button increment={-10} onClickFunction={incrementCount} />
      <Button increment={-100} onClickFunction={incrementCount} />
      <Button increment={-1000} onClickFunction={incrementCount} />
      <br />
      <Button increment={"RESET"} onClickFunction={reset} />
      <Button increment={"SAVE"} onClickFunction={saveCount} />
      <span>{count}</span>
      <br />
      List
      {counts.map((i, k) => {
        return <div keys={k}> {i}</div>;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
