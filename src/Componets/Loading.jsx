import React from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
  return (
    <Loader>
      <Bars
        height="150"
        width="150"
        radius="5"
        color="orange"
        ariaLabel="loading"
      />
    </Loader>
  );
};

//styles
const Loader = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.918);
  backdrop-filter: blur(25px);
  justify-content: center;

`;

export default Loading;
