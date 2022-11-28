// doTask1: Double value in 1min
async function doTask1(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg * 2;
      console.log("From doTask 1", { arg, result });
      resolve(result);
    }, 1000);
  });
}

// doTask1: Square value in 1min
async function doTask2(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg ** 2;
      console.log("From doTask 2", { arg, result });
      resolve(result);
    }, 1000);
  });
}

// doTask1: Mod 23 value in 1min
async function doTask3(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg % 23;
      console.log("From doTask 2", { arg, result });
      resolve(result);
    }, 1000);
  });
}

// 1. An async function
async function init() {
  const res1 = await doTask1(100);
  console.log(res1);

  const res2 = await doTask2(res1);
  console.log(res2);

  const res3 = await doTask3(res2);
  console.log(res3);
}

init();

// 2. This function executes a generator
function runner(gen) {
  const generator = gen();

  function run(arg) {
    const { done, value } = generator.next(arg);
    if (done) {
      return value;
    } else {
      return Promise.resolve(value).then(run);
    }
  }

  return run();
}

runner(function* () {
  const res1 = yield doTask1(100);
  console.log(res1);

  const res2 = yield doTask2(res1);
  console.log(res2);

  const res3 = yield doTask3(res2);
  console.log(res3);
});
