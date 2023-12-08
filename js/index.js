// This function is to display the number buttons of decimal , octal , binary and the calculator
function appendToDisplay(value) {
  document.calculator.display.value += value;
}

// This function is to display the number buttons of hexadecimal buttons
function appendHex(value) {
  document.calculator.display.value += value;
}

// This function is to clear the numbers inputed to Display
function clearDisplay() {
  document.calculator.display.value = '';
}

// This function is to convert numbers to their specific number system
function convertNumber() {
  var number = document.getElementById("number").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result;
  

  if (from === "decimal") {
    number = parseInt(number, 10);
  } else if (from === "binary") {
    number = parseInt(number, 2);
  } else if (from === "octal") {
    number = parseInt(number, 8);
  } else if (from === "hexadecimal") {
    number = parseInt(number, 16);
  }

  if (to === "decimal") {
    result = number.toString(10);
  } else if (to === "binary") {
    result = number.toString(2);
  } else if (to === "octal") {
    result = number.toString(8);
  } else if (to === "hexadecimal") {
    result = number.toString(16);
  }
  document.getElementById("result").innerText = "Result: " + result;
}


// This function is to disable buttons that doesn't belong to their specific number system
function toDisable() {
 let from = document.getElementById("from").value;
 let buttonsToDisable = [];
 let optionToDisable = [];

 if (from === "binary") {
  buttonsToDisable = ['.binary'];
  // optionToDisable =
 }
 else if (from === "decimal") {
  buttonsToDisable = ['.decimal'];
 }
 else if (from === "octal"){
  buttonsToDisable = ['.octal'];
 }
 else if (from === "hexadecimal"){
  buttonsToDisable = ['.hexa']
 }

 document.querySelectorAll('.number-button button').forEach(button => {
  button.disabled = false;
 });

 buttonsToDisable.forEach(className => {
  document.querySelectorAll(className).forEach(button => {
    button.disabled = true;
  });
 });
}

