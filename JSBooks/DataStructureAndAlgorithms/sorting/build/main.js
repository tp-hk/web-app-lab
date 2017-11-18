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
    for (let i = 0; i < this.dataStore.length; i++) {

      let smallestIndex = i;
      let smallest = this.dataStore[i];
      for (let j = i; j < this.dataStore.length; j++) {
        if (this.dataStore[j] < smallest) {
          smallestIndex = j;
          smallest = this.dataStore[j];
        }
      }

      this.swap(smallestIndex, i);
    }
  }

  this.insertionSort = function () {
    let tempArr = [];
    tempArr.push(this.dataStore[0]);

    let insertIndex;
    for (let i = 1; i < this.dataStore.length; i++) {
      let toCompareItem = this.dataStore[i];

      for (let j = 0; j < tempArr.length; j++) {
        insertIndex = j;
        if (toCompareItem <= tempArr[j]) {
          tempArr.splice(insertIndex, 0, toCompareItem);
          break;
        }
      }

      if (insertIndex === tempArr.length - 1)
        tempArr.push(toCompareItem);

    }

    this.dataStore = tempArr;
  }

  this.shellSort = function () {
    let n = Math.floor(this.dataStore.length/2);
    while (n > 0) {
      for (let i = 0; (i + n) < this.dataStore.length; i++) {
        let j = i + n;
        let k = i;

        while(k >=0){
          if(this.dataStore[j] >= this.dataStore[k])
            break;

          this.swap(j, k);

          j = k;
          k -= n;
        }
      }
      n = Math.floor(n/2);
    }
  }
}


var ne1 = new CArray(100);

ne1.setData();
print(ne1.toString());

print();
print('bubble sort');
ne1.bubbleSort();
print(ne1.toString());

print();
print('selection sort');
ne1.setData();
ne1.selectionSort();
print(ne1.toString());

print();
print('insertion sort');
ne1.setData();
ne1.insertionSort();
print(ne1.toString());

print();
print('shell sort');
ne1.setData();
ne1.shellSort();
print(ne1.toString());




















































































// ====== helper functions ======
function print(message) {
  if (message === null || message === undefined)
    document.getElementById('output').innerHTML += '<br/>';
  else
    document.getElementById('output').innerHTML += message + '<br/>';
}
