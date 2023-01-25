// https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1

nextLargerElement = function (arr) {
  const stack = [];
  var nextGreaterArray = [];
  for (var i = 0; i < arr.length; i++) {
    var current_item = arr[i];
    while (stack.length) {
      var item_index = stack.pop();
      if (current_item > arr[item_index]) {
        nextGreaterArray[item_index] = current_item;
      } else {
        stack.push(item_index);
        break;
      }
    }
    stack.push(i);
    nextGreaterArray.push(-1);
  }
  return nextGreaterArray;
};
