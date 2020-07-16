let result = document.getElementById("result");

function displayNum(num) {
  if (result.value == 0) {
    result.value = num;
  } else {
    result.value = result.value + num;
  }
}
