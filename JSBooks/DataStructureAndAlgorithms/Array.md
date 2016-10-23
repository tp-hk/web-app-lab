### Creating arrays

- Ways to create an array: 
  - var arr = [1, 2, 3, 4];   // most efficient
  - var arr = new Array(1,2,3,"foo", null, false);
  - var arr = new Array(5);
  - var arr = sentenceString.split(delimiter);
  - var arrShallowCopy = arr; //shallow copy. changing value in one will affect the other
  
- Array methods:
  - Array.isArray(arr);
  - arr.indexOf, arr.firstIndexOf(), arr.lastIndexOf()
  - arr.join(delimiter) // for arrays only. Elements delimited by `delimiter`
  - arr.toString(); // generic methods, applicable to other data structures as well. Elements delimited by commas
  - console.log(arr); // print methods such as console.log(err) will call toString() automatically
