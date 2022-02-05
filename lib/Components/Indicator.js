import styled from "styled-components";

const Indicator = styled.div`
  border-bottom-color: gold;
  border-bottom-width: 50px;
  position: absolute;
  bottom: 0px;
  height: 3px;
  transition: 0.5s;
  background: ${(props) => props.indicatorColor};
  left: ${(props) => props.indicatorLocation}px;
  width: ${(props) => props.indicatorWidth}px;
`;

export default Indicator;
