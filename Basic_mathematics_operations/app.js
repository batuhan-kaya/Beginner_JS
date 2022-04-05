const nResult = document.getElementById("result");
const btn = document.getElementById("btn").addEventListener("click", factorialStart);

function factorialStart() {
  let n = document.getElementById("nValue").value;
  if (n == "") {
    alert("Please enter a number...");
    return;
  } else {
    function factorial(n) {
      if (n === 0) {
        clearInput();
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
  }
  var num = n;
  nResult.innerHTML = "Factorial of " + num + " is " + factorial(num);
}

function clearInput() {
  let reset = document.getElementById("nValue");
  reset.value = "";
}
