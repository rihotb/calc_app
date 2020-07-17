let result = document.getElementById("result");
let beforeNum = 0;
let operator = null;

/**
 * 入力した数値を出力します
 * @param num 入力した数値
 */
function displayNum(num) {
  if (result.value == 0) {
    result.value = num;
  } else {
    let resultLength = result.value.length + 1;
    if (resultLength > 10) {
      return;
    }
    result.value = result.value + num;
  }
}

/**
 * 一の位を削除します
 */
function clean() {
  result.value = result.value.slice(0, -1);
}

/**
 * 全ての位を削除します
 */
function allClean() {
  result.value = 0;
}

/**
 * 四則演算機能へ移行します
 * @param operator 演算子
 */
function calculate(operator) {
  this.operator = operator;
  if (result.value == 0) {
    return;
  }
  beforeNum = result.value;
  result.value = 0;
}

/**
 * 四則演算した結果を出力します
 */
function equal() {
  if (!this.operator) {
    return;
  }
  if (this.operator == "+") {
    result.value = Number(beforeNum) + Number(result.value);
  } else if (this.operator == "-") {
    result.value = Number(beforeNum) - Number(result.value);
  } else if (this.operator == "*") {
    result.value = Number(beforeNum) * Number(result.value);
  } else if (this.operator == "/") {
    result.value = Number(beforeNum) / Number(result.value);
  }
}
