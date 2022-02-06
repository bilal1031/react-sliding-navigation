import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { NavBar, NavNavigator } from "../lib";
import { StateProvider } from "../hooks/useNavigator";

const stories = storiesOf("App Test", module);

const Page = () => {
  return <div></div>;
};
stories.add("App", () => {
  const navItems = [{ name: "hello", href: "hello" }];
  const pages = [Page];

  const [isActive, setIsActive] = useState([0]);
  return (
    <div style={{ backgroundColor: "tomato", width: "100%", height: "100%" }}>
      <StateProvider activeState={{ isActive, setIsActive }}>
        <NavBar navItems={navItems} navBrand="Bilal" indicatorColor="white" />
        <NavNavigator pages={pages} />
      </StateProvider>
    </div>
  );
});
