let operationObject = {
  firstNumber: "",
  secondNumber: "",
  operator: null,
  result: null,
};

const displayNumber = document.querySelector(".displayNumber");

// That function set the element "displayNumber"
const setDisplayNumber = (clickedNumber) => {
  if (operationObject.operator == null) {
    operationObject.firstNumber += clickedNumber;
  } else {
    operationObject.secondNumber += clickedNumber;
  }
  displayNumber.innerText =
    (operationObject.firstNumber == operationObject.result && operationObject.secondNumber == "") || operationObject.operator == null
      ? operationObject.firstNumber
      : operationObject.secondNumber;
};

// That function delete the last number on display, its a backspace.
const backspaceDisplayNumber = () => {};

const setOperator = (clickedOperator) => {
  doOperation();
  operationObject.operator = clickedOperator;

  if (operationObject.firstNumber != "" && operationObject.secondNumber == "") setDisplayNumber("");
};

const doOperation = () => {
  if (operationObject.firstNumber != "" && operationObject.secondNumber != "" && operationObject.operator != null) {
    switch (operationObject.operator) {
      case "+":
        operationObject.result = Number(operationObject.firstNumber) + Number(operationObject.secondNumber);
        setResult();
        break;
      case "-":
        operationObject.result = Number(operationObject.firstNumber) - Number(operationObject.secondNumber);
        setResult();
        break;
      case "x":
        operationObject.result = Number(operationObject.firstNumber) * Number(operationObject.secondNumber);
        setResult();
        break;
      case "/":
        operationObject.result = Number(operationObject.firstNumber) / Number(operationObject.secondNumber);
        setResult();
        break;
    }
  }
};

const setResult = () => {
  operationObject = {
    firstNumber: operationObject.result,
    secondNumber: "",
    operator: null,
    result: operationObject.result,
  };
  setDisplayNumber("");
};
