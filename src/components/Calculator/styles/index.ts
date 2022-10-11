import styled, { css } from "styled-components";

type ButtonProps = {
  buttonValue: string | number;
  buttonColor: string;
  fontColor: string;
};

export const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  background: linear-gradient(191.34deg, #17181a -4.95%, #17181a 103.74%);
  border-radius: 40px;
`;

export const ScreenBox = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 138px 0 78px 0;
  padding: 0 18px;
`;

export const CalculationArea = styled.div`
  color: #818181;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 6px;

  & span {
    color: #109dff;
  }
`;

export const ResultArea = styled.div`
  color: #ffffff;
  font-style: normal;
  font-size: 48px;
  line-height: 72px;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LeftArea = styled.div`
  width: 226px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FirstRow = styled.div`
  width: 226px;
  height: auto;
  display: flex;
  gap: 20px;
`;

export const SecondRow = styled.div`
  width: 226px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ThirdRow = styled.div`
  width: 226px;
  height: auto;
  display: flex;
  gap: 20px;
`;

export const RightArea = styled.div`
  width: 62px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.div<ButtonProps>`
  ${({ buttonValue, buttonColor, fontColor }) => css`
    background: ${buttonColor};
    width: ${buttonValue === 0 ? "144px" : "62px"};
    height: ${buttonValue === "=" || buttonValue === "+" ? "102px" : "62px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;

    & p {
      color: ${fontColor};
      font-style: normal;
      font-size: 32px;
      line-height: 48px;
    }
  `}
`;
