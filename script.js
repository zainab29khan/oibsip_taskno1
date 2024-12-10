let display = document.getElementById("display");
let currentInput = "";
let operator = null;

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput === "" && op !== "-") return;
  currentInput += ` ${op} `;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

function deleteLast() {
  currentInput = currentInput.trimEnd();
  if (currentInput.endsWith(" ")) {
    currentInput = currentInput.slice(0, -3);
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  display.textContent = currentInput || "0";
}

function calculateResult() {
  try {
    let sanitizedInput = currentInput.replace(/x/g, "*");
    currentInput = eval(sanitizedInput).toString();
    display.textContent = currentInput;
  } catch {
    display.textContent = "Error";
  }
}
