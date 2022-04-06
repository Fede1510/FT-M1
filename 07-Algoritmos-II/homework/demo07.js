'use strict'
// No cambies los nombres de las funciones.

var array = [2,1,7,5,4]
 
function merge(leftArray, rightArray){
    var output = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        var leftEl = leftArray[leftIndex];
        var rightEl = rightArray[rightIndex];
        if(leftEl < rightEl){
            output.push(leftEl);
            leftIndex++;
        }else {
            output.push(rightEl);
            rightIndex++;
        }
    } return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if(array.length <= 1) return array;
    var midVal = Math.floor(array.length / 2);

    var left = array.slice(0, midVal);
    var right = array.slice(midVal);

  return merge(mergeSort(left), mergeSort(right));
   
  }
console.log(mergeSort(array))