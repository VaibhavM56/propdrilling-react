import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      componentB {props.userName}
      <ComponentC
        userName={props.userName}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default ComponentB;
