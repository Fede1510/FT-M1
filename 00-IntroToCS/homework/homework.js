'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var acc = 0;
  for (var i = 0; i < num.length; i++){
  acc = acc + num[i] * Math.pow(2, num.length - 1 - i)
  } return acc;

}

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  do {
      array.unshift(num % 2);
      num = Math.floor(num / 2)
  } while(num != 0);
  return array.join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}