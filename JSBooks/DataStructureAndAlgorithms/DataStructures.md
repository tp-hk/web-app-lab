
## Data structures

Template: https://jsfiddle.net/rwfc0kzy/

### Array 
- Ways to create an array: 
  - var arr = [1, 2, 3, 4];   // most efficient
  - var arr = new Array(1,2,3,"foo", null, false);
  - var arr = new Array(5);
  - var arr = sentenceString.split(delimiter);
  - var arrShallowCopy = arr; //shallow copy. changing value in one will affect the other
  - var newArray = arr1.concat(arr2);

- Array functions:
  - Array.isArray(arr);
  - arr.indexOf, arr.firstIndexOf(), arr.lastIndexOf()
  - arr.join(delimiter) // for arrays only. Elements delimited by `delimiter`
  - arr.toString(); // generic methods, applicable to other data structures as well. Elements delimited by commas
  - console.log(arr); // print methods such as console.log(err) will call toString() automatically
  
- [Array mutators](https://jsfiddle.net/7vap1hLs/5/)
  - Remove items 
    - var removedItem = arr.shift();  // remove the first item
    - var removedItem = arr.pop();  // rmeove the last item
  - Add items
    - var newLength = arr.unshift(item1, item2, ...);  // add to the beginning
    - var newLength = arr.push(item1, item2...); // add to the end
  - Add and remove from the middle of an array
    - [arr.splice(startIndex, deleteCount, [replacement1, replacemet2...])](https://jsfiddle.net/7vap1hLs/2/);  // removg items and optionally add items back
    
- [Reordering an array](https://jsfiddle.net/7vap1hLs/6/) 
  - var reversedArr = arr.reverse();
  - var sortedArr = arr.sort(), var sortedArr = arr.sort(sortingFunction)
  
- [Iterator functions](https://jsfiddle.net/d09so86p/3/)
  - Non-array generating functions
    - arr1.forEach(iteratorFunction);
    - var doAllMatch = arr1.every(callback);
    - var doSomeMatch = arr1.some(callback);
    - var result = arr1.reduce(callback, initValue);  // go through items from left to right
    - var result = arr1.reduceRight(callback, initValue);   // go through items from right to left
  - Array generating functions
    - var arr2 = arr1.map(mapFunction);
    - var arr2 = arr1.filter(filterFunction);

### Stack 
- Infix to postfix conversion: https://jsfiddle.net/3vgLqw55/21/
- Check for unbalanced brackets: https://jsfiddle.net/h40d2ty1/4/

### Queue 
- Queue and variation: https://jsfiddle.net/pdf0u79f/3/
- Queue implemented using 2 stacks:https://jsfiddle.net/Lyzkc9ts/10/
 
### List
- Linked list and doubly linked list: https://jsfiddle.net/3an9n14x/14/
 
### Dictionary
- Dictionary: https://jsfiddle.net/3x209e3v/
 
### Hash table
- Hash table: https://jsfiddle.net/f1xrcyq0/19/
 
### Tree
- Binary search tree: https://jsfiddle.net/0adbydrk/3/
 
### Graphs
- Graph: https://jsfiddle.net/ujuds5w0/2/
