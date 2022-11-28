function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.sort().toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(a, b) {
  return a + b;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => console.log(memoizeAdd(38, 30, 100, 200, 5000)));
time(() => console.log(memoizeAdd(38, 30, 100, 200, 5000)));
time(() => console.log(memoizeAdd(100, 30, 38, 200, 5000)));
time(() => console.log(memoizeAdd(5000, 30, 38, 200, 100)));
