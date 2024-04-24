// Selection sorting algorithm
// Time complexity: O(logN), space complexity: O(N)

const listOfNumbers = [333, 55, 21, 13, 92, 51, 23, -100, 12, 65, 72, -21, -10, 15, 19];

const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (pivotIndex === i) {
      continue;
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const result = quickSort(listOfNumbers);

console.log(result);
