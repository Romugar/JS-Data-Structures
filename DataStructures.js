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
    return collection.shift();
  };
  // devuelve el primer elemento de la lista
  this.front = function() {
    return collection[0];
  };
}

//-----------------------//
// PRIORITY QUEUE CLASS  //
//-----------------------//
// type of Queue in which items may have additional information which specifies their priority ["x", 2]

function PriorityQueue() {
  this.collection = [];
  // muestra la lista en la consola
  this.printCollection = function() {
    console.log(this.collection);
  };
  // devuelve el tamaño de la lista
  this.size = function() {
    return this.collection.length;
  };
  // indica si la lista esta vacia
  this.isEmpty = function() {
    return this.collection.length === 0;
  };
  // devuelve el primer elemento
  this.front = function() {
    return this.collection[0];
  };
  // devuelve el primer elemento de la lista y lo borra
  this.dequeue = function() {
    return this.collection.shift()[0];
  };
  // metodo para añadir elementos segun si prioridad
  this.enqueue = function(val) {
    // en lista vacia añade el elemento
    if (this.isEmpty()) {
      this.collection.push(val);
      // si tiene menor prioridad que el ultimo elemento lo añade al final
    } else if (this.collection[this.collection.length - 1][1] <= val[1]) {
      this.collection.push(val);
      // si tiene mayor prioridad que el primero lo añade al principio
    } else if (this.collection[0][1] > val[1]) {
      this.collection.unshift(val);
      // y sino, itera la lista
    } else {
      for (let i = 0; i < this.collection.length; i++) {
        // cuando encuentra un elemento con prioridad menor, lo añade en ese lugar
        if (this.collection[i][1] > val[1]) {
          this.collection.splice(i, 0, val);
          break;
        }
      }
    }
  };
}

//----------------//
// CIRCULAR QUEUE //
//----------------//
// A circular queue is basically a queue that writes to the end of a collection then begins over writing itself at the beginning of the collection
// can be used for streaming media

class CircularQueue {
  constructor(size) {
    // lista, puntero de lectura, puntero de escritura y tamaño de la lista
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    // crea la lista del tamaño especificado con cada elemento como null
    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }
  // devuelve la lista actual
  print() {
    return this.queue;
  }
  // añade elementos
  enqueue(item) {
    // calcula el siguiente indice a donde esta el puntero de escritura y si el puntero es el ultimo vuelve al principio
    let nextIndex = 0;    
    if (this.write !== this.max) {
      nextIndex = this.write + 1;
    }
    // si el elemento donde esta el puntero de escritura es null, añade el elemento nuevo, lo devuelve y avanza el puntero de escritura
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write = nextIndex;
      return item;
    // si el elemento donde esta el puntero de escritura tiene un valor no hace nada y devuelve null
    } else {
      return null;
    }
  }

  dequeue() {
    // calcula el siguiente indice a donde esta el puntero de lectura y si el puntero es el ultimo vuelve al principio
    let nextIndex = 0;
    if (this.read !== this.max) {
      nextIndex = this.read + 1;
    }
    // si el elemento donde esta el puntero de lectura tiene un valor, lo cambia a null, devuelve el valor que tenia y avanza el puntero de lectura
    if (this.queue[this.read] !== null) {
      let temp = this.queue.splice(this.read, 1, null);
      this.read = nextIndex;
      return temp[0];
    // si el elemento donde esta el puntero de lectura es null, no hace nada y devuelve null
    } else {
      return null;
    }
  }
}
