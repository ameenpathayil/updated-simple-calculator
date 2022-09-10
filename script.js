let str1 = "";
let str2 = "";
let display = "";
let operator = [];
let strlen = 0;
let operatorLength = 0;
let calcString = "";
let result = 0;

function myOp(value) {
  str1= document.getElementById("n1").value;
  strlen = str1.length;
  if (str1.length > 0) {
    operator.push(value);
    operatorLength = operator.length;
    str1=document.getElementById("n1").value = str1 + value;
  } else {
    alert("enter first number properly!!!");
  }

  console.log("operator legth=", operatorLength);
  console.log("str lenth=", strlen);
  console.log("operator array=", operator);
  console.log("main string=", str1);
}

function calc() {
  str2 = document.getElementById("n2").value;
  calcString = str1 + str2;
  console.log("calculation string=", calcString);
  result = eval(calcString);
  console.log(calcString);
  document.getElementById("display").value = result;
}

//digits only restrictions function
function digitsOnly(input) {
  var regex = /[^0-9.]/gi;
  input.value = input.value.replace(regex, "");
}
