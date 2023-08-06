import React, { useState } from "react";
interface Props {
  children: string;
  maxchars?: number;
}
const Expantable = ({ children, maxchars = 101 }: Props) => {
  const [isexpanded, setexpanded] = useState(false);

  if (children.length <= maxchars) return <p>{children}</p>;

  const text = isexpanded ? children : children.substring(0, maxchars);

  return (
    <p>
      {text}...
      <button onClick={() => setexpanded(!isexpanded)}>
        {isexpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default Expantable;
