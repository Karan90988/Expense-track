import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setstatus] = useState(true);

  const toggle = () => {
    setstatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={25} onClick={toggle} />;
  return <AiOutlineHeart size={25} onClick={toggle} />;
};

export default Like;
