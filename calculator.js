function sum(a, b) {
  if(a === undefined && b === undefined){
    return 0;
  }else if(b === undefined){
    return a;
  }else {
    return a + b;
  }
}

function subtract(a, b) {
  if( a === undefined && b === undefined ){
    return 0;
  } else if( !a || !b) {
    return a - 0;
  } else {
    return a -b;
  }
}

function divide(a, b) {
 if ( b === 0 || !b){
    throw Error;
  } else {
    return a / b;
  }
}

function multiply(a, b) {
if( a === 0){
  return 0;
} else if( a == -1 || B == -1){
  return -a;
}else{
  return a * b;
}
  
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
