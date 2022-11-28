function MyPromise(fn) {
  let onResolve;
  let onReject;
  let isCalled = false;

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    return this;
  };

  function resolve(value) {
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }
  function reject(err) {
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  fn(resolve, reject);
}

function getNumber() {
  const num = Math.floor(Math.random() * 100);
  return num;
}

const resolutionTime = 1000;

let myPromise = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    const randomNumber = getNumber();
    console.log(randomNumber);
    if (randomNumber % 5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  }, resolutionTime);
});

myPromise
  .then((num) => {
    console.log(`Success, number= ${num}`);
  })
  .catch((num) => {
    console.log(`Failed, number= ${num}`);
  });
