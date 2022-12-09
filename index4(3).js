let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOparation(oparation) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);

  if (oparation === "+") {
    result = number1 + number2;
  } else if (oparation === "-") {
    result = number1 - number2;
  } else if (oparation === "*") {
    result = number1 * number2;
  } else if (oparation === "/") {
    result = number1 / number2;
  } else {
    result = "not";
  }
  window.alert(result);
}

function onButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let oparation = clickedElement.innerHTML;
  makeOparation(oparation);
}

var optionsButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide]

function addCommonEventListener(i) {
}

for (let i = 0; i < optionsButtons.length; i++) {
  let button = optionsButtons[i]
  button.addEventListener("click", onButtonClick);
}
