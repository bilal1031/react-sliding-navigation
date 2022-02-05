import styled from "styled-components";

const Wrapper = styled.div`
  // background-color: ${(props) => props.color};
  width: 100%;
  height: ${window.innerHeight - 48}px;
  transition: 0.5s;
  position: absolute;
  left: 100vw;
  padding: 0px;
  margin-bottom: 30px;
  transform: translateX(${(props) => props.translate}%);
  @media only screen and (max-width: 768px) {
     {
      transform: translateX(0%);
      position: relative;
      left: 0;
    }
  }
`;

export default Wrapper;
