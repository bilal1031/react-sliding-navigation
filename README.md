# react-sliding-navigation

react-sliding-navigation is React component based small library.
It creates a creates a simple one page web app which navigates
between pages without the use of react-router-dom with page
sliding animation.

## Installation

Install react-sliding-navigation with npm

```bash
  npm i react-sliding-navigation
```

## Dependencies

- styled-components

## Demo

![Demo](/src/assets/demo.gif?raw=true "Demo")

## Usage/Examples

```javascript
import { useState } from "react";
import { StateProvider, NavBar, NavNavigator } from "react-sliding-navigation";
import "./App.css";

const Page1 = () => (
  <div
    style={{ backgroundColor: "black", height: "100%", width: "100%" }}
  ></div>
);
const Page2 = () => (
  <div
    style={{ backgroundColor: "tomato", height: "100%", width: "100%" }}
  ></div>
);
const Page3 = () => (
  <div
    style={{ backgroundColor: "dodgerblue", height: "100%", width: "100%" }}
  ></div>
);
const Page4 = () => (
  <div style={{ backgroundColor: "gold", height: "100%", width: "100%" }}></div>
);

function App() {
  const navItems = [
    { name: "Home" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "ContactMe" },
    { name: "Experience" },
  ];

  const [isActive, setIsActive] = useState([1, 0, 0, 0]);
  const pages = [Page1, Page2, Page3, Page4];

  return (
    <StateProvider activeState={{ isActive, setIsActive }}>
      <NavBar
        navItems={navItems}
        indicatorColor="tomato"
        navbarColor="black"
        navBrand="Muhammad Bilal"
      />
      <NavNavigator pages={pages} />
    </StateProvider>
  );
}

export default App;
```
