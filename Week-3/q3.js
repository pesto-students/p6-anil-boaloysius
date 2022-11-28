function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// Output: "Count is 0"
// Explanation: The value of message message is set when createIncrement() 
// is called, not when increment() is called.