import React from "react";
import styled from "styled-components";

const Freddie = _ => {
  return <Background />;
};

export default Freddie;

const Background = styled.div`
  width: 740px;
  height: 740px;
  margin: 25px auto;
  background-image: linear-gradient(#b5cfe8, #7892ab 10%, #cae4fd 100%);
`;
