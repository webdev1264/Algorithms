// Selection sorting algorithm
// Time complexity: O(n^2), space complexity: O(1)

const listOfNumbers = [333, 55, 21, 13, 92, 51, 23, -100, 12, 65, 72, -21, -10, 15, 19];

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

const result = bubbleSort(listOfNumbers);

console.log(result);
