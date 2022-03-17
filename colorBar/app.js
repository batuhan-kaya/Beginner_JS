const container = document.getElementById("container");
let colorBar = document.getElementById("colorBar");
let rangeValue = document.querySelector(".rangeValue");

startFunc();

function startFunc() {
  colorBar.addEventListener("input", hslNumber);
}

function hslNumber() {
  let newValue = colorBar.value;
  document.documentElement.style.setProperty("--hue-color", newValue);
  rangeValue.innerHTML = colorBar.value;
}
