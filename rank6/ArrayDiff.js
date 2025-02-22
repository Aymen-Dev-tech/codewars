function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(
  arrayDiff(
    [
      -4, 2, 5, -2, 1, 9, -7, 10, 14, 20, -12, -9, 19, -3, 2, 1, 11, -18, -20,
      -9,
    ],
    [-4, 2, 5, -2, 1, 9, -7, 10, 14, 20, -12, -9, 19, -3, 2]
  )
);
