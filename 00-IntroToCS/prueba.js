var num = '10101'

function BinarioADecimal(num) {
    // tu codigo aca
//     var acc = 0;
//     for (var i = 0; i < num.length; i++){ 
//         acc = acc + num[i] * Math.pow(2, (num.length - 1 - i));
//         console.log(acc)
//     } 
//   return acc;
//    if(num.constructor != String){
//        return null;
//    }
    return Number.parseInt(num, 2)

  }
  console.log(BinarioADecimal(num))

