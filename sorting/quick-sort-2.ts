// Worst case time complexity O(n^2)
// Average case time complexity O(n log n)
// Best case time complexity O(n log n)
// Space complexity O(n)

const listOfNumbers = [333, 55, 21, 13, 92, 51, 23, -100, 12, 65, 72, -21, -10, 15, 19];

const quickSort = (arr: number[], low: number = 0, high: number = listOfNumbers.length - 1) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};

const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);

  return i + 1;
};

const swap = (arr: number[], i: number, j: number) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

quickSort(listOfNumbers);

console.log(listOfNumbers);
