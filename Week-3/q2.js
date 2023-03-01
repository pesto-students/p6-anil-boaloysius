// Add function add given value to the current value of any object
// and return the sum

function add(a) {
  return this.current + a;
}
boundA = add.bind({ current: 10 });
console.log(boundA(3));

// The findMaxUsingPositionalargumentOrArray
// take either positional argument or a single array to
// find the maximum value

function findMaxUsingPositionalargumentOrArray(...args1) {
  function max(...args) {
    currentMax = -Infinity;
    for (i = 0; i < args.length; i++) {
      currentMax = args[i] > currentMax ? args[i] : currentMax;
    }
    return currentMax;
  }

  if (args1.length == 1 && Array.isArray(args1[0])) {
    return max.apply(null, args1[0]);
  } else {
    return max(...args1);
  }
}

console.log(findMaxUsingPositionalargumentOrArray([1, 12, 3, 4, 5]));
console.log(findMaxUsingPositionalargumentOrArray(1, 12, 3, 4, 5));

// The funciton return full name from firstname and lastname of any object
function getFullName() {
  return this.firstname + " " + this.lastname;
}
console.log(getFullName.call({ firstname: "Boby", lastname: "Johnson" }));
