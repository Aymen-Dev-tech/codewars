function digitalRoot(n) {
  let sum = 0;
  //transform to string
  //loop through the charters and sum them up
  for (let char of n.toString()) {
    console.log("old sum: ", sum);
    console.log("current char: ", char);
    sum = sum + parseInt(char);
    console.log("new sum is: ", sum);
  }
  //transform the result to string then check the length
  //length == 1 return the result otherwise. Repeat form step
  console.log("current length: ", sum.toString().length === 1);
  if (sum && sum.toString().length === 1) return sum;
  return digitalRoot(sum);
}
console.log("results: ", digitalRoot(456));
