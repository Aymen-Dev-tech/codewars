function countSixes(n) {
  const result = calculateDevilishSequence(n);
  const resultToArray = result.toString().split("");
  let count = 0;
  for (let i = 2; i < resultToArray.length; i++) {
    if (resultToArray[i] === "6") {
      count++;
    } else {
      return count;
    }
  }
}
console.log(countSixes(10));

function calculateDevilishSequence(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (
    (calculateDevilishSequence(n - 1) + calculateDevilishSequence(n - 2)) / 2
  );
}
