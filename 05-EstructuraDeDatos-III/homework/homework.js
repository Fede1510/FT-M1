'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(data){
  if(data < this.value){
    if(this.left == null){
      this.left = new BinarySearchTree(data);
    }else{
      this.left.insert(data);
    }
  } else {
    if(this.right === null){
      this.right = new BinarySearchTree(data);
    } else {
      this.right.insert(data);
    }
  }
}
BinarySearchTree.prototype.contains = function(data){
  if(data === this.value) return true;
  if(data > this.value){
      if(!this.right) return false;
      else return this.right.contains(data);
  }else {
      if(!this.left) return false;
      else return this.left.contains(data);
  } 
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, metodo){
  if(metodo === 'in-order' || !metodo){
    // 1. preguntar si hay Hijo IZQ - seguir ahi
    // 2. retornar el cb con el valor encontrado
    // 3. preguntar si hay Hijo DER. - seguir ahi
    if(this.left) this.left.depthFirstForEach(cb, metodo);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb, metodo);

  }else if(metodo === 'post-order'){
    // 1. preguntar si hay Hijo IZQ - seguir ahi
    // 2. preguntar si hay Hijo DER. - seguir ahi
    // 3. retornar el cb con el valor encontrado
    if(this.left) this.left.depthFirstForEach(cb, metodo);
    if(this.right) this.right.depthFirstForEach(cb, metodo);
    cb(this.value);
  }else if(metodo === 'pre-order'){
    // 1. retornar el cb con el valor encontrado
    // 2. preguntar si hay Hijo IZQ - seguir ahi
    // 3. preguntar si hay Hijo DER. - seguir ahi
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb, metodo);
    if(this.right) this.right.depthFirstForEach(cb, metodo);
  }
  
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){

if(!array) var array = [];
if(this.left) array.push(this.left);
if(this.right) array.push(this.right);
cb(this.value)
if(array.length > 0){
  array.shift().breadthFirstForEach(cb, array);
}

}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right) return 1;
  if(this.left && this.right){
    return 1 + this.left.size() + this.right.size();
  }else if(this.left){
    return 1 + this.left.size();
  }else if(this.right){
    return 1 + this.right.size();
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
