let Calculator = "";

function updateValue(Value) {
  try {
    Calculator += Value;
    document.querySelector(".values").innerHTML = Calculator;
    document.querySelector(".values2").innerHTML = Calculator =
      eval(Calculator);
  } catch {
    console.log((SyntaxError = "Error").message);
  }
}
function Reset() {
  document.querySelector(".values").innerHTML = Calculator = "";
  document.querySelector(".values2").innerHTML = Calculator = "";
}
