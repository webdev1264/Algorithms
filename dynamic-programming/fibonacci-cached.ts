const fibonacci = (n: number): number => {
  const memo: number[] = [];

  const fibHelper = (n: number): number => {
    if (n <= 1) {
      return n;
    }

    if (!memo[n]) {
      memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
    }

    return memo[n];
  };

  return fibHelper(n);
};

console.log(fibonacci(100));
