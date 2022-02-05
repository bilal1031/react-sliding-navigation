import React, { useState, createRef } from "react";
import { NavBrand, NavItem, NavDiv, Indicator } from "../Components";
import { useNavigator } from "../hooks/useNavigator";

const NavBar = ({ navItems, navbarColor, indicatorColor, navBrand }) => {
  require("./navbar.css");
  const home = createRef();

  const { setIsActive } = useNavigator();
  const [indicatorLocation, setIndicatorLocation] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(64);

  const translatePage = (current) => {
    const index = navItems.findIndex(function (item, i) {
      return item.name === current;
    });
    let items = [];
    for (let i = 0; i < navItems.length; i++) items.push(0);

    items[index] = 1;
    setIsActive(items);
  };
  const handleNavClick = (e) => {
    setIndicatorLocation(e.target.offsetLeft);
    setIndicatorWidth(e.target.clientWidth);
    if (window.innerWidth > 768) {
      translatePage(e.target.innerHTML);
    }
  };

  return (
    <NavDiv
      style={{
        backgroundColor: navbarColor,
      }}
    >
      <NavBrand>{navBrand}</NavBrand>
      <div style={{ position: "relative" }}>
        {navItems.map((e, index) => (
          <NavItem ref={home} onClick={handleNavClick} key={index}>
            {e.name}
          </NavItem>
        ))}

        <Indicator
          indicatorLocation={indicatorLocation}
          indicatorWidth={indicatorWidth}
          indicatorColor={indicatorColor}
        />
      </div>
    </NavDiv>
  );
};

export default NavBar;
