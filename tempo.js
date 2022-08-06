let first = 5;
let second = 7;
console.log(first, second);
// wrong aproach
// first=second;
// second=first;

// approach 1
// const tem = first;
// first = second;
// second = tem;

// approach 2------destructuring
[first, second] = [second, first];
console.log(first, second);