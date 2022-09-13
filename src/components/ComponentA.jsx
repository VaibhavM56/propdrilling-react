import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  return (
    <div>
      <h1>componentA</h1>

      <ComponentB
        userName={props.userName}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default ComponentA;
