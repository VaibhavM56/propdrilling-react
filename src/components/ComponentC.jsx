import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <div>
      componentC
      <ComponentD
        userName={props.userName}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default ComponentC;
