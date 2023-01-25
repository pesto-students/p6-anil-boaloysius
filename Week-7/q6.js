var MyQueue = function () {
  var stack1 = [];
  var stack2 = [];
  return {
    push: function (x) {
      stack1.push(x);
    },
    pop: function () {
      this._prepare();
      return stack2.pop();
    },
    _prepare: function () {
      if (stack2.length === 0)
        while (stack1.length > 0) stack2.push(stack1.pop());
    },
    _print: function () {
      console.log(stack1, stack2);
    },
  };
};

const operations = function (queue, input) {
  while ((instruction = input.shift())) {
    if (instruction == 1) {
      const pushed_item = input.shift();
      queue.push(pushed_item);
    } else {
      console.log(queue.pop());
    }
  }
};

let queue = new MyQueue();
operations(queue, [1, 2, 1, 3, 2, 1, 4, 2]);

// Complexity
// Push: O(1)
// Pop: O(n)
