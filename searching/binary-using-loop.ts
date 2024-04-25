const listOfNumbers = [-100, -21, -10, 12, 13, 15, 19, 21, 23, 51, 55, 65, 72, 92, 333];

const binarySearch = (arr: number[], element: number) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = 0;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (element === arr[middle]) {
      return true;
    }
    if (element < arr[middle]) {
      end = middle;
      continue;
    }
    if (element > arr[middle]) {
      start = middle + 1;
    }
  }
  return false;
};

const result = binarySearch(listOfNumbers, 19);

console.log(result);
