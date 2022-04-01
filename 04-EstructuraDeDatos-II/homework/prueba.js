'use strict'

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
    this.head = null;
}

function Node(info){
    this.value = info;
    this.next = null;
}

var linkedList = new LinkedList;

LinkedList.prototype.add = function(info){
    var node = new Node(info);
    if(!this.head){
        this.head = node;
    }else {
        var current = this.head;
        while(current.next){
            current = current.next;
        } current.next = node;
    }
}

LinkedList.prototype.remove = function(){

    if(!this.head) { return null;}
    else if(!this.head.next){
         var current = this.head;
         this.head = null;
        return current.value;
    } else {
        var current = this.head;
        while(current.next.next != null){
            current = current.next;
        } 
        var data = current.next.value;
        current.next = null;
        return data;

        }
    }
}

LinkedList.prototype.search = function(argument){
    if(!this.head) { return null }
    else if(typeOf(argument) != "function"){
        var current = this.head;
        while(current){
            if(current.value === argument){
                return current;
            }return null;
        }

    } else {
        var test = function(data){ data === argument }
        while(current){
            if(current.value === test){
                return current;
            }else {
                current = current.next;
            }
        }
    }
    
}

  linkedList.add(1);
  linkedList.add(2);
  console.log(linkedList);
  linkedList.remove();
  console.log(linkedList);
  linkedList.remove();
  console.log(linkedList);