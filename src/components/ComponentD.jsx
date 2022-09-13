import React from "react";

function ComponentD(props) {
  const changeName = () => {
    const data1 = "Prajwal";
    props.setData(data1);
  };

  return (
    <div>
      ComponentD {props.userName}
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default ComponentD;
