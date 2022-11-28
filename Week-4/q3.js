const fib = (len) => ({
  [Symbol.iterator]: () => {
    let n = 0;
    let a1 = 0;
    let a2 = 1;
    return {
      next() {
        n++;
        if (n <= len) {
          if (n == 1) {
            return { value: a1, done: false };
          } else if (n == 2) {
            return { value: a2, done: false };
          } else {
            let current = a1 + a2;
            a1 = a2;
            a2 = current;
            return { value: current, done: false };
          }
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
});

console.log([...fib(10)]);
// Output: [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
