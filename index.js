function add(a, b){
  var result = a + b;
  return result;
}

function subtract(a, b){
  var result = a - b;
  return result;
}

function multiply(a, b){
  var result = a * b;
  return result;
}

function divide(a, b){
  var result = a / b;
  return result;
}

function inc(n){
  return n + 1;
}

function dec(n){
  return n - 1;
}

function makeInt(n){
  var parsedInt = parseInt(n, 10);
  return parsedInt;
}

function preserveDecimal(n){
  var parsedDec = parseFloat(n);
  return parsedDec;
}
