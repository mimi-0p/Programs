const display = document.getElementById("display");
let firstNumber = null;
let secondNumber = null;
let operator = null;

document.querySelectorAll(".num").forEach(button => {
  button.addEventListener("click", function() {
    display.value += button.value;
  });
});

document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", function() {
    firstNumber = parseFloat(display.value);
    display.value = "";
    operator = button.value;
  });
});

document.querySelector("#equals").addEventListener("click", function() {
  secondNumber = parseFloat(display.value);

  switch (operator) {
    case "+":
      display.value = firstNumber + secondNumber;
      break;
    case "-":
      display.value = firstNumber - secondNumber;
      break;
    case "*":
      display.value = firstNumber * secondNumber;
      break;
    case "/":
      display.value = firstNumber / secondNumber;
      break;
    default:
      display.value = "Invalid operator";
  }
});

document.querySelector("#clear").addEventListener("click", function() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display.value = "";
});
