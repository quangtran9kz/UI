import React from "react";
const Welcome = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1>Xin chào {props.name} !</h1>
    </div>
  );
};
export default Welcome;