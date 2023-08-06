import React from "react";
interface Props {
  cartitemscount: number;
}
const NavBar = ({ cartitemscount }: Props) => {
  return <div>NavBar:{cartitemscount}</div>;
};

export default NavBar;
