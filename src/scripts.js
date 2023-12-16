let operationObject = {
  firstNumber: "",
  secondNumber: "",
  operator: null,
  result: null,
};

const displayNumber = document.querySelector(".displayNumber");

const previousValue = document.querySelector(".previousValue");
const currentOperator = document.querySelector(".currentOperator");

// That function set the element "displayNumber"
const setDisplayNumber = (clickedNumber) => {
  if (operationObject.operator == null) {
    operationObject.firstNumber += clickedNumber;
  } else {
    operationObject.secondNumber += clickedNumber;
  }
  displayNumber.innerText =
    (operationObject.firstNumber == operationObject.result && operationObject.secondNumber == "" && operationObject.operator == null) ||
    operationObject.operator == null
      ? operationObject.firstNumber
      : operationObject.secondNumber;
};

const setOperator = (clickedOperator) => {
  doOperation();
  operationObject.operator = operationObject.firstNumber != "" ? clickedOperator : null;
  currentOperator.innerText = operationObject.operator;

  if (operationObject.firstNumber != "" && operationObject.secondNumber == "") setDisplayNumber("");

  previousValue.innerText = operationObject.firstNumber;
  previousValue.style.animation = "none";

  setTimeout(() => {
    previousValue.style.animation = "previousValueAnimation 0.2s forwards";
  }, 20);
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
  previousValue.style.animation = "none";
  currentOperator.innerText = "";

  setTimeout(() => {
    previousValue.style.animation = "previousValueAnimation 0.2s forwards reverse";
  }, 2);

  operationObject = {
    firstNumber: operationObject.result,
    secondNumber: "",
    operator: null,
    result: operationObject.result,
  };
  setDisplayNumber("");
};

// That function delete the last number on display, its a backspace.
const backspaceDisplayNumber = () => {
  if (operationObject.firstNumber != "" && operationObject.operator != null) {
    operationObject.secondNumber = operationObject.secondNumber.substring(0, operationObject.secondNumber.length - 1);
    displayNumber.innerText = operationObject.secondNumber;
  } else {
    operationObject.firstNumber = operationObject.firstNumber.substring(0, operationObject.firstNumber.length - 1);
    displayNumber.innerText = operationObject.firstNumber;
  }
};

const clearAll = () => {
  operationObject = {
    firstNumber: "",
    secondNumber: "",
    operator: null,
    result: null,
  };

  displayNumber.innerText = 0;
  currentOperator.innerText = operationObject.operator;
  previousValue.style.animation = "none";
  setTimeout(() => {
    previousValue.style.animation = "previousValueAnimation 0.2s forwards reverse";
  }, 2);
};
