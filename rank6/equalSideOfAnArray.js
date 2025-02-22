function findEvenIndex(arr) {
  let leftSideSum = 0;
  let rightSideSum = arr.reduce((acc, val) => acc + val, 0);
  for (let i = 0; i < arr.length; i++) {
    rightSideSum -= arr[i];
    if (leftSideSum === rightSideSum) return i;
    leftSideSum += arr[i];
  }
  return -1;
}
