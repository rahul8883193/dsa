function printFibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

printFibonacci(10); // prints first 10 Fibonac
