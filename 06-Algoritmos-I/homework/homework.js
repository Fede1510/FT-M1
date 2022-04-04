'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1];
  var fact = 2;
    while(num > 1){
        if(num % fact === 0){
            array.push(fact);
            num = num / fact;
        }else {
            fact++
        }
    }
    return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if(array[j] > array[j + 1]){
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
  } return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0; j--){
      if(array[j] < array[j - 1]){
          var temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
      }
    }
  } return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
          minIndex = j;
      }  
    } var temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
} return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
