// Time complexity: O(n)
// Space complexity: O(1)

const listOfNumbers = [-100, -21, -10, 12, 13, 15, 19, 21, 23, 51, 55, 65, 72, 92, 333];

const linearSearch = (arr: number[], element: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

const result = linearSearch(listOfNumbers, 19);

console.log(result);
