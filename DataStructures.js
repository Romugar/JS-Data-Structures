//--------------------//
// THE STACK -- LIFO  //
//  Last-In-First-Out //
//--------------------//

// Ejemplo básico con pop y push
var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
homeworkStack.pop(); // se quita el ultimo
homeworkStack.push("CS50"); // se añade uno nuevo al final

// creacion de una clase Stack

function Stack() {
  var collection = [];
  // muestra la lista en la consola
  this.print = function() {
    console.log(collection);
  };
  // añadir un nuevo elemento
  this.push = function(val) {
    collection.push(val);
  };
  // devuelve el ultimo elemento y lo borra de la lista
  this.pop = function() {
    let temp = collection[collection.length - 1];
    collection.pop();
    return temp;
  };
  // devuelve el ultimo elemento
  this.peek = function() {
    return collection[collection.length - 1];
  };
  // indica si la lista esta vacia
  this.isEmpty = function() {
    return collection.length == 0;
  };
  // borra la lista
  this.clear = function() {
    collection = [];
  };
}

//--------------------//
// THE QUEUE -- FIFO  //
// First-In-First-Out //
//--------------------//

// creacion de una clase Queue

function Queue() {
  var collection = [];
  // muestra la lista en la consola
  this.print = function() {
    console.log(collection);
  };
  // devuelve el tamaño de la lista
  this.size = function() {
    return collection.length;
  };
  // indica si la lista esta vacia
  this.isEmpty = function() {
    return collection.length == 0;
  };
  // añade el elemento al final de la lista
  this.enqueue = function(val) {
    collection.push(val);
  };
  // devuelve el primer elemento de la lista y lo borra
  this.dequeue = function() {
    let temp = collection[0];
    collection.shift();
    return temp;
  };
  // devuelve el primer elemento de la lista
  this.front = function() {
    return collection[0];
  };
}
