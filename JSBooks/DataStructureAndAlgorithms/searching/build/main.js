function CArray(numElements) {
  this.dataStore = [];
  this.numElements = numElements;
  this.pos = 0;

  this.insert = function (element) {
    this.dataStore[this.pos++] = element;
  }

  this.toString = function () {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  this.clear = function () {
    for (var i = 0; i < this.dataStore.length; i++)
      this.dataStore[i] = 0;
  }

  this.setData = function () {
    // first, populate array with list of number from 0 to number of elements -1
    for (var i = 0; i < this.numElements; i++)
      this.dataStore[i] = i;

    // then shuffle the numbers
    for (var i = 0; i < this.numElements; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [this.dataStore[i], this.dataStore[randomIndex]] = [this.dataStore[randomIndex], this.dataStore[i]];
    }
  }

  this.getData = function () {
    return this.dataStore;
  }

  this.setArray = function (arr) {
    this.dataStore = arr;
  }

  this.swap = function (index1, index2) {
    // var temp = this.dataStore[index1];
    // this.dataStore[index1] = this.dataStore[index2];
    // this.dataStore[index2] = temp;

    [this.dataStore[index1], this.dataStore[index2]] = [this.dataStore[index2], this.dataStore[index1]];
  }

  this.bubbleSort = function () {
    for (let i = 1; i < this.dataStore.length; i++) {
      // outer loop from 1 to (length - 1)
      for (let j = 0; j < (this.dataStore.length - i); j++) {
        // each inner loop compares 0-1, 1-2... length-2-length-1
        if (this.dataStore[j] > this.dataStore[j + 1])
          this.swap(j, j + 1);
      }
    }
  }

  this.selectionSort = function () {
    for (let i = 0; i < this.dataStore.length - 1; i++) {
      let smallestIndex = i;

      for (let j = i + 1; j < this.dataStore.length; j++) {
        if (this.dataStore[smallestIndex] > this.dataStore[j])
          smallestIndex = j;
      }

      this.swap(smallestIndex, i);
    }
  }

  this.insertionSort = function () {
    for (let i = 1; i < this.dataStore.length; i++) {
      for (let j = i; j >= 1; j--) {
        if (this.dataStore[j] > this.dataStore[j - 1])
          break;

        this.swap(j, j - 1);
      }
    }
  }

  this.shellSort = function () {

    let n = Math.floor(this.dataStore.length / 2);

    while (n > 0) {
      for (let i = 0; (i + n) < this.dataStore.length; i++) {
        let j = i + n;
        let k = i;

        while (k >= 0) {
          if (this.dataStore[j] >= this.dataStore[k])
            break;

          this.swap(j, k);

          j = k;
          k -= n;
        }
      }

      n = Math.floor(n / 2);
    }
  }

  this.binarySearch = function (arr, item) {

    let min = arr[0], max = arr[arr.length - 1], midpoint = Math.round((min + max) / 2);
    // let minIndex = -1, maxIndex = -1, index = -1;
    let loopIndex = 0;
    if (item < arr[0] || item > arr[arr.length - 1]) {
      print('item is out of range');
      return -1;
    }

    while (min !== max) {
      print(++loopIndex + ': min ' + min + '; max ' + max + '; midpoint ' + midpoint);

      if (item === midpoint) {
        let i = 0;
        while (arr[i] !== item)
          ++i;
        return i;
      }
      else if (item < midpoint)
        max = Math.floor(midpoint);
      else
        min = Math.ceil(midpoint);

      midpoint = Math.round((max + min) / 2);
    }

    return -1;
  }

  this.getOccurrences = function (arr, item) {
    let occurrences = 0;
    const index = this.binarySearch(arr, item);

    if (index === -1)
      return occurrences;

    // item exists, count occurrences of smaller indices 
    let startingIndex = index;
    while (arr[--startingIndex] === item)
      ++occurrences;

    startingIndex = index;
    while (arr[++startingIndex] === item)
      ++occurrences;

    return occurrences;
  }
}

var ne1 = new CArray(1000);

print();
ne1.setData();
ne1.shellSort();
print();
let item = 656;

// 1
print();
let arr = []
const index = ne1.binarySearch(ne1.getData(), item);
print(`${item} was found at index ${index} from an array with ${ne1.getData().length} items`);














































































// ====== helper functions ======
function print(message) {
  if (message === null || message === undefined)
    document.getElementById('output').innerHTML += '<br/>';
  else
    document.getElementById('output').innerHTML += message + '<br/>';
}
