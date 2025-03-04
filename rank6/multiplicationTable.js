function multiplicationTable(size) {
  const matrix = new Array(size).fill(null).map(() => new Array(size).fill(0));
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      matrix[r][c] = (r + 1) * (c + 1);
    }
  }
  return matrix;
}
console.log(multiplicationTable(3));
