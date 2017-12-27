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

  this.setArray = function(arr){
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

  this.mergeSort = function () {
    this.dataStore = this._mergeSort(this.dataStore);
  }

  this._mergeSort = function (arr) {
    if (arr.length < 2)
      return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return this.merge(this._mergeSort(left), this._mergeSort(right));
  }

  this.merge = function (left, right) {
    var result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length)
      result.push(left.shift());

    while (right.length)
      result.push(right.shift());

    console.log(result);
    return result;
  }

  this.quickSort = function () {
    this._quickSort(this.dataStore);
  }

  this._quickSort = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    let pivot = left;
    let newPivot;

    while (left !== right) {
      if (pivot === left) {
        // compare pivot to the right side
        while (arr[pivot] < arr[right])
          right -= 1;

        newPivot = right;
        this.swap(pivot, right);
        pivot = right;
      } else {
        while (arr[pivot] > arr[left])
          left += 1;

        newPivot = left;
        this.swap(pivot, left);
        pivot = left;
      }
    }

    // left side
    this._quickSort(arr.slice(0, pivot - 1));

    // right side
    this._quickSort(arr.slice(pivot + 1, arr.length - 1));
  }
}

var ne1 = new CArray(100);
// var ne1 = [5, 2, 6, 1, 3, 4];

// print();
// ne1.setData();
// print('bubble sort');
// print('original: ' + ne1.toString())
// ne1.bubbleSort();
// print('sorted ' + ne1.toString());

// print();
// ne1.setData();
// print('selection sort');
// print('original: ' + ne1.toString())
// ne1.selectionSort();
// print('sorted ' + ne1.toString());

// print();
// ne1.setData();
// print('insertion sort');
// print('original: ' + ne1.toString())
// ne1.insertionSort();
// print(ne1.toString());

// print();
// ne1.setData();
// print('shell sort');
// print('original: ' + ne1.toString())
// ne1.shellSort();
// print('sorted ' + ne1.toString());

// print();
// ne1.setData();
// print('merge sort');
// print('original: ' + ne1.toString())
// ne1.mergeSort();
// print('sorted ' + ne1.toString());

print();
ne1.setArray([5, 2, 6, 1, 3, 4]);
print('quick sort');
print('original: ' + ne1.toString());
ne1.quickSort();
print('sorted ' + ne1.toString());



















































































// ====== helper functions ======
function print(message) {
  if (message === null || message === undefined)
    document.getElementById('output').innerHTML += '<br/>';
  else
    document.getElementById('output').innerHTML += message + '<br/>';
}
