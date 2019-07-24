import React from "react";
import styled from "styled-components";

import Freddie from "../canvases/Freddie";

const App = _ => {
  return (
    <AppWrapper>
      <Freddie />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: black;
`;
