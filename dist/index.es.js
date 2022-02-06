import e,{useContext as t,useState as n,createRef as o}from"react";import i from"styled-components";const r=i.div`
  border-bottom-color: gold;
  border-bottom-width: 50px;
  position: absolute;
  bottom: 0px;
  height: 3px;
  transition: 0.5s;
  background: ${e=>e.indicatorColor};
  left: ${e=>e.indicatorLocation}px;
  width: ${e=>e.indicatorWidth}px;
`,a=i.span`
  color: white;
  font-size: 24px;
`,d=i.div`
    display:flex;
    padding: 1rem;
    flex-direction:row;
    justify-content: space-between;
    
`,c=i.span`
    color: white;
    margin-right: 20px;
    margin-top: 5px;
    cursor: pointer;
    display: inline-block;
`,l=i.div`
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
`,s=e.createContext(),p=()=>{const{isActive:e,setIsActive:n}=t(s);return{isActive:e,setIsActive:n}},m=({activeState:t,children:n})=>e.createElement(s.Provider,{value:t},n);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("body{overflow:hidden}");const h=({navItems:t,navbarColor:i,indicatorColor:l,navBrand:s})=>{const m=o(),{setIsActive:h}=p(),[f,u]=n(0),[v,x]=n(64),g=e=>{u(e.target.offsetLeft),x(e.target.clientWidth),window.innerWidth>768&&(e=>{const n=t.findIndex((function(t,n){return t.name===e}));let o=[];for(let e=0;e<t.length;e++)o.push(0);o[n]=1,h(o)})(e.target.innerHTML)};return e.createElement(d,{style:{backgroundColor:i}},e.createElement(a,null,s),e.createElement("div",{style:{position:"relative"}},t.map(((t,n)=>e.createElement(c,{ref:m,onClick:g,key:n},t.name))),e.createElement(r,{indicatorLocation:f,indicatorWidth:v,indicatorColor:l})))},f=({pages:t})=>{const{isActive:n}=p();return e.createElement(e.Fragment,null,t.map(((t,o)=>e.createElement(l,{translate:1===n[o]?"-100":"0",key:o,index:o},t()))))};export{h as NavBar,f as NavNavigator,m as StateProvider};
