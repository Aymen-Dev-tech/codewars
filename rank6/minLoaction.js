function mineLocation(field) {
  //1. loop through the array
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      //2. check for the value of 1
      if (field[i][j] === 1) return [i, j];
    }
  }
  return [0, 0];
  //3. if it exists return their index
}
