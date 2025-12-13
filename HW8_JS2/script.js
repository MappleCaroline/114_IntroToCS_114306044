function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function updateButtonText() {
  let operator = document.getElementById("operator").value;
  let btn = document.getElementById("calcBtn");

  if (operator === "+") btn.innerText = "Add";
  if (operator === "-") btn.innerText = "Subtract";
  if (operator === "*") btn.innerText = "Multiply";
  if (operator === "/") btn.innerText = "Divide";
}

function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Result = Invalid input";
    return;
  }

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }

  if (typeof result === "number") {
    result = result.toFixed(2);
  }

  document.getElementById("result").innerText = "Result = " + result;
}
