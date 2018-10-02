Lista de data structures en JS, todos realizados por mi atendiendo a la petición del enunciado, algunas soluciones estarán mejor y otras peor, pero no he usado en ningun caso recursos externos.

- THE STACK -- LIFO

Last-In-First-Out. Clase con metodos para manejar un Stack. Los elementos salen y entran al final del array.

- THE QUEUE -- FIFO

First-In-First-Out. Clase con metodos para manejar un Queue. Los elementos se añaden al final y salen del principio del array.

- PRIORITY QUEUE

Clase Queue teniendo en cuenta la prioridad del elemento añadido. Los elementos salen del principio del array y entran al final de los elementos que tengan la misma prioridad o si no hay elementos con la misma prioridad entrarian despues de los elementos con mayor prioridad.

- CIRCULAR QUEUE

Clase Queue que escribe hasta el final de la lista y luego vuelve desde el principio, la lista tiene un tamaño predeterminado, según lee elimina los datos. Solo sobreescribe si esos datos se han leido y solo lee hasta donde hay datos. 

- THE SET

A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item. It has union, intersection, difference and subset methods.

- MAP DATA STRUCTURE

Maps are data structures that store key-value pairs.This class is like the built-in map in ES6. Include this methods: 
1. **add** accepts a key, value pair to add to the map.
2. **remove** accepts a key and removes the associated key, value pair.
3. **get** accepts a key and returns the stored value.
4. **has** accepts a key and returns true if the key exists or false if it doesn't.
5. **values** returns an array of all the values in the map.
6. **size** returns the number of items in the map.
7. **clear** empties the map.

- HASH TABLE

A Hash table is used to implement associative arrays. The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value. This numerical value is then used as the actual key the associated value is stored by. Then, if you try to access the same key again, the hashing function will process the key, return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(n) lookup time on average. It has add, remove and lookup methods.