// Selection sorting algorithm
// Time complexity: O(n^2), space complexity: O(1)

const listOfNumbers = [333, 55, 21, 13, 92, 51, 23, -100, 12, 65, 72, -21, -10, 15, 19];

const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

const result = insertionSort(listOfNumbers);

console.log(result);
