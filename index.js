function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/b
}

function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n){
  if (Number(n))
    if (/^[0-9]*$/gm.test(n))
      return Number(n)
    else
      return 0
  else
    return NaN
}

function preserveDecimal(n){
  try{
    return +(n)
  }
  catch(err){
    return NaN
  }
}
