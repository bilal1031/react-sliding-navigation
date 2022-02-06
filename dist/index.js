"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),r=n(t);const a=r.default.div`
  border-bottom-color: gold;
  border-bottom-width: 50px;
  position: absolute;
  bottom: 0px;
  height: 3px;
  transition: 0.5s;
  background: ${e=>e.indicatorColor};
  left: ${e=>e.indicatorLocation}px;
  width: ${e=>e.indicatorWidth}px;
`,i=r.default.span`
  color: white;
  font-size: 24px;
`,d=r.default.div`
    display:flex;
    padding: 1rem;
    flex-direction:row;
    justify-content: space-between;
    
`,l=r.default.span`
    color: white;
    margin-right: 20px;
    margin-top: 5px;
    cursor: pointer;
    display: inline-block;
`,s=r.default.div`
  // background-color: ${e=>e.color};
  width: 100%;
  height: ${window.innerHeight-48}px;
  transition: 0.5s;
  position: absolute;
  left: 100vw;
  padding: 0px;
  margin-bottom: 30px;
  transform: translateX(${e=>e.translate}%);
  @media only screen and (max-width: 768px) {
     {
      transform: translateX(0%);
      position: relative;
      left: 0;
    }
  }
`,c=o.default.createContext(),u=()=>{const{isActive:t,setIsActive:n}=e.useContext(c);return{isActive:t,setIsActive:n}};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("body{overflow:hidden}");exports.NavBar=({navItems:t,navbarColor:n,indicatorColor:r,navBrand:s})=>{const c=e.createRef(),{setIsActive:f}=u(),[p,m]=e.useState(0),[v,h]=e.useState(64),x=e=>{m(e.target.offsetLeft),h(e.target.clientWidth),window.innerWidth>768&&(e=>{const n=t.findIndex((function(t,n){return t.name===e}));let o=[];for(let e=0;e<t.length;e++)o.push(0);o[n]=1,f(o)})(e.target.innerHTML)};return o.default.createElement(d,{style:{backgroundColor:n}},o.default.createElement(i,null,s),o.default.createElement("div",{style:{position:"relative"}},t.map(((e,t)=>o.default.createElement(l,{ref:c,onClick:x,key:t},e.name))),o.default.createElement(a,{indicatorLocation:p,indicatorWidth:v,indicatorColor:r})))},exports.NavNavigator=({pages:e})=>{const{isActive:t}=u();return o.default.createElement(o.default.Fragment,null,e.map(((e,n)=>o.default.createElement(s,{translate:1===t[n]?"-100":"0",key:n,index:n},e()))))},exports.StateProvider=({activeState:e,children:t})=>o.default.createElement(c.Provider,{value:e},t);
