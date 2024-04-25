const listOfNumbers = [-100, -21, -10, 12, 13, 15, 19, 21, 23, 51, 55, 65, 72, 92, 333];

const binarySearch = (arr: number[], start: number, end: number, element: number): boolean => {
  if (start > end) {
    return false;
  }
  const middle = Math.floor((start + end) / 2);
  if (element === arr[middle]) {
    return true;
  }
  if (element < arr[middle]) {
    return binarySearch(arr, 0, middle, element);
  }
  return binarySearch(arr, middle + 1, end, element);
};

const result = binarySearch(listOfNumbers, 0, listOfNumbers.length - 1, 19);

console.log(result);
