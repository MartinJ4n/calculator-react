import { FC, ReactElement } from "react";

import Calculator from "../../components/Calculator";

import { Wrapper } from "./styles";

const Calculate: FC = (): ReactElement => {
  return (
    <Wrapper>
      <Calculator />
    </Wrapper>
  );
};

export default Calculate;
