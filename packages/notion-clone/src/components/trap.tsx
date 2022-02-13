import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const Trap = (): ReactElement => {
  return (
    <TrapContainer>
      <h1>Trap</h1>
    </TrapContainer>
  );
};

const TrapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

export default Trap;
