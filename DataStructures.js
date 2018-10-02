//--------------------------//
// THE STACK CLASS -- LIFO  //
//     Last-In-First-Out    //
//--------------------------//

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

//--------------------------//
// THE QUEUE CLASS -- FIFO  //
//    First-In-First-Out    //
//--------------------------//

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

//----------------------//
// CIRCULAR QUEUE CLASS //
//----------------------//
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

//-----------//
// SET CLASS //
//-----------//

// A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item.

function Set() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // this method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  this.remove = function(element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  this.size = function() {
    return collection.length;
  };
  // this method will return the union of two sets
  this.union = function(otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will return true if the otherSet is contained in the set
  this.subset = function(otherSet) {
    var isContained = true;
    var firstSet = this.values();
    firstSet.forEach(d => {
      if (!otherSet.has(d)) {
        isContained = false;
      }
    });
    return isContained;
  };
}

//--------------------------//
// MAP DATA STRUCTURE CLASS //
//--------------------------//
//  Maps are data structures that store key-value pairs. This class is like the built-in map in ES6

var Map = function() {
  this.collection = {};
  // accepts a key, value pair to add to the map.
  this.add = function(key, value) {
    this.collection[key] = value;
  };
  // accepts a key and removes the associated key, value pair
  this.remove = function(key) {
    delete this.collection[key];
  };
  // accepts a key and returns the stored value
  this.get = function(key) {
    return this.collection[key];
  };
  // accepts a key and returns true if the key exists or false if it doesn't.
  this.has = function(key) {
    return this.collection.hasOwnProperty(key);
  };
  // returns an array of all the values in the map
  this.values = function() {
    return Object.values(this.collection);
  };
  // returns the number of items in the map
  this.size = function() {
    return Object.keys(this.collection).length;
  };
  //empties the map
  this.clear = function() {
    this.collection = {};
  };
};

//------------//
// HASH TABLE //
//------------//
// A Hash table is used to implement associative arrays.
// The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value.
// This numerical value is then used as the actual key the associated value is stored by.
// Then, if you try to access the same key again, the hashing function will process the key,
// return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(n) lookup time on average.

// funcion que hashea la key convirtiendo cada letra en su valor numerico y sumandolos
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
// Clase para gestionar la Hash Table
let HashTable = function() {
  this.collection = {};
  // Metodo que añade key-value
  this.add = function(key, value) {
    // hashea el key
    let hashed = hash(key);
    // si hay algun hash igual lo itera, si algun key es igual a la añadida la sobreescribe, sino añade otro [key: value] en ese hash
    if (this.collection.hasOwnProperty(hashed)) {
      let bucket = this.collection[hashed].filter(
        item => !item.hasOwnProperty(key)
      );
      bucket.push({ [key]: value });
      this.collection[hashed] = bucket;
      // si el hash es nuevo lo crea y añade [key:value]
    } else {
      this.collection[hashed] = [{ [key]: value }];
    }
  };
  // metodo que borra [key: value]
  this.remove = function(key) {
    let hashed = hash(key);
    // si hay un hash igual y tiene solo un valor lo borra
    if (this.collection.hasOwnProperty(hashed)) {
      if (this.collection[hashed].length == 1) {
        delete this.collection[hashed];
        // sino, lo itera y busca una key igual y la borra
      } else {
        this.collection[hashed] = this.collection[hashed].filter(
          item => !item.hasOwnProperty(key)
        );
      }
      // sino encuentra nada devuelve null
    } else {
      return null;
    }
  };
  // metodo para burcar el valor de una key
  this.lookup = function(key) {
    let hashed = hash(key);
    // si tiene un hash igual, lo itera (recursivamente) y busca un key igual y devuelve su value
    if (this.collection.hasOwnProperty(hashed)) {
      let bucket = this.collection[hashed];
      function find(index) {
        if (bucket[index].hasOwnProperty(key)) {
          return bucket[index][key];
        } else if (index != 0) {
          return find(index - 1);
        } else {
          return null;
        }
      }
      return find(bucket.length - 1);
    } else {
      return null;
    }
  };
};
