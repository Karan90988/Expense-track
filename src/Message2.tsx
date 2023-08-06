import React from "react";

let count = 1;

const Message2 = () => {
  console.log("message called", count);
  count++;
  return <div>Message2 {count}</div>;
};

export default Message2;
