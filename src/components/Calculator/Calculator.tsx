import { useState, useEffect, FC, ReactElement } from "react";

import {
  Wrapper,
  ScreenBox,
  ButtonsBox,
  CalculationArea,
  ResultArea,
  LeftArea,
  RightArea,
  FirstRow,
  SecondRow,
  ThirdRow,
  Button,
} from "./styles";
import Delete from "../../assets/icons/delete.svg";

type StringOrNumber = string | number;

const Calculator: FC = (): ReactElement => {
  const [firstValue, setFirstValue] = useState<StringOrNumber[]>([]);
  const [secondValue, setSecondValue] = useState<StringOrNumber[]>([]);
  const [operator, setOperator] = useState<string>();
  const [result, setResult] = useState<number>();

  /**
   * converts arrays of values into a number
   */
  const firstNumber = Number(firstValue.join(",").replace(/,/g, ""));
  const secondNumber = Number(secondValue.join(",").replace(/,/g, ""));

  /**
   * in case the first value is removed, the operator and the result is cleaned up
   */
  useEffect(() => {
    if (firstValue.length === 0) {
      setOperator(undefined);
      setResult(undefined);
    }
  }, [firstValue]);

  /**
   * custom handlers
   */
  const handleValue = (number: number): void => {
    if (operator) {
      const secondValueCopy = [...secondValue];
      secondValueCopy.push(number);
      return setSecondValue(secondValueCopy);
    } else if (!operator) {
      const firstValueCopy = [...firstValue];
      firstValueCopy.push(number);
      return setFirstValue(firstValueCopy);
    }
    return;
  };

  const handleOperactorSelection = (value: string): void => {
    return setOperator(value);
  };

  const handleFloat = (value: string): void => {
    const firstValueFloat = firstValue.find((element) => element === ".");
    const secondValueFloat = secondValue.find((element) => element === ".");

    if (operator) {
      if (secondValueFloat) return;
      const secondValueCopy = [...secondValue];
      secondValueCopy.push(value);
      return setSecondValue(secondValueCopy);
    } else if (!operator) {
      if (firstValueFloat) return;
      const firstValueCopy = [...firstValue];
      firstValueCopy.push(value);
      return setFirstValue(firstValueCopy);
    }
    return;
  };

  const handleResult = (): void => {
    if (firstValue && secondValue) {
      if (operator === "+") {
        const result = firstNumber + secondNumber;
        return setResult(result);
      } else if (operator === "-") {
        const result = firstNumber - secondNumber;
        return setResult(result);
      } else if (operator === "*") {
        const result = firstNumber * secondNumber;
        return setResult(result);
      } else if (operator === "/") {
        const result = firstNumber / secondNumber;
        return setResult(result);
      }
    }
    return;
  };

  const handleDelete = (): void => {
    if (secondValue.length > 0) {
      const secondValueCopy = [...secondValue];
      secondValueCopy.pop();
      return setSecondValue(secondValueCopy);
    } else if (firstValue.length > 0) {
      const firstValueCopy = [...firstValue];
      firstValueCopy.pop();
      return setFirstValue(firstValueCopy);
    }
    return;
  };

  const handleClear = (): void => {
    setFirstValue([]);
    setSecondValue([]);
    setOperator(undefined);
    setResult(undefined);
    return;
  };

  const firstRowButtons = [
    {
      buttonName: "clear input",
      buttonValue: "Ac",
      buttonColor: "#616161",
      fontColor: "#A5A5A5",
      handler: handleClear,
    },
    {
      buttonName: "delete",
      buttonValue: Delete,
      buttonColor: "#616161",
      fontColor: "#A5A5A5",
      handler: handleDelete,
    },
    {
      buttonName: "divide",
      buttonValue: "/",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      handler: handleOperactorSelection,
    },
  ];

  const secondRowButtons = [
    {
      buttonName: "1",
      buttonValue: 1,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "2",
      buttonValue: 2,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "3",
      buttonValue: 3,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "4",
      buttonValue: 4,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "5",
      buttonValue: 5,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "6",
      buttonValue: 6,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "7",
      buttonValue: 7,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "8",
      buttonValue: 8,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "9",
      buttonValue: 9,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
  ];

  const thridRowButtons = [
    {
      buttonName: "0",
      buttonValue: 0,
      buttonColor: "#303136",
      fontColor: "#29A8FF",
      handler: handleValue,
    },
    {
      buttonName: "float",
      buttonValue: ".",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      handler: handleFloat,
    },
  ];

  const sideRowButtons = [
    {
      buttonName: "multiple",
      buttonValue: "*",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      horizontal: true,
      handler: handleOperactorSelection,
    },
    {
      buttonName: "subtract",
      buttonValue: "-",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      horizontal: true,
      handler: handleOperactorSelection,
    },
    {
      buttonName: "add",
      buttonValue: "+",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      horizontal: true,
      handler: handleOperactorSelection,
    },
    {
      buttonName: "result",
      buttonValue: "=",
      buttonColor: "#1991FF",
      fontColor: "#B2DAFF",
      horizontal: true,
      handler: handleResult,
    },
  ];

  return (
    <Wrapper>
      <ScreenBox>
        <CalculationArea>
          {firstValue}
          <span>{operator}</span>
          {secondValue}
        </CalculationArea>

        {/* display the result with two decimas, however, only if decimals exists */}
        <ResultArea>{result?.toFixed(2).replace(/[.,]00$/, "")}</ResultArea>
      </ScreenBox>

      <ButtonsBox>
        <LeftArea>
          <FirstRow>
            {firstRowButtons.map(
              (
                { buttonName, buttonValue, buttonColor, fontColor, handler },
                index
              ) => (
                <Button
                  buttonValue={buttonValue}
                  buttonColor={buttonColor}
                  fontColor={fontColor}
                  onClick={() => handler(buttonValue)}
                  key={index}
                >
                  {buttonName === "delete" ? (
                    <img src={buttonValue} alt="deleteIcon" />
                  ) : (
                    <p>{buttonValue}</p>
                  )}
                </Button>
              )
            )}
          </FirstRow>

          <SecondRow>
            {secondRowButtons.map(
              ({ buttonValue, buttonColor, fontColor, handler }, index) => (
                <Button
                  buttonValue={buttonValue}
                  buttonColor={buttonColor}
                  fontColor={fontColor}
                  onClick={() => handler(buttonValue)}
                  key={index}
                >
                  <p>{buttonValue}</p>
                </Button>
              )
            )}
          </SecondRow>

          <ThirdRow>
            {thridRowButtons.map(
              ({ buttonValue, buttonColor, fontColor, handler }, index) => (
                <Button
                  buttonValue={buttonValue}
                  buttonColor={buttonColor}
                  fontColor={fontColor}
                  // @ts-ignore
                  onClick={() => handler(buttonValue)}
                  key={index}
                >
                  <p>{buttonValue}</p>
                </Button>
              )
            )}
          </ThirdRow>
        </LeftArea>

        <RightArea>
          {sideRowButtons.map(
            ({ buttonValue, buttonColor, fontColor, handler }, index) => (
              <Button
                buttonValue={buttonValue}
                buttonColor={buttonColor}
                fontColor={fontColor}
                onClick={() => handler(buttonValue)}
                key={index}
              >
                <p>{buttonValue}</p>
              </Button>
            )
          )}
        </RightArea>
      </ButtonsBox>
    </Wrapper>
  );
};

export default Calculator;
