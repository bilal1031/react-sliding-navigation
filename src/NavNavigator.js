import React from "react";
import { Wrapper } from "./Components";
import { useNavigator } from "./hooks/useNavigator";

const NavNavigator = ({ pages }) => {
  const { isActive } = useNavigator();

  return (
    <>
      {pages.map((e, index) => (
        <Wrapper
          //   color="black"
          translate={isActive[index] === 1 ? "-100" : "0"}
          key={index}
          index={index}
        >
          {e()}
        </Wrapper>
      ))}
    </>
  );
};

export default NavNavigator;
