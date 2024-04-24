// Selection sorting algorithm
// Time complexity: O(n^2), space complexity: O(1)

const listOfNumbers = [333, 55, 21, 13, 92, 51, 23, -100, 12, 65, 72, -21, -10, 15, 19];

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;

    // //or using destructuring
    // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

const result = selectionSort(listOfNumbers);

console.log(result);
