function looseChange(cents) {
  const result = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents < 0 || cents === 0) return result;
  let roundedNum = Math.floor(Math.abs(cents));
  while (roundedNum >= 1) {
    if (roundedNum >= 25) {
      roundedNum = roundedNum - 25;
      result["Quarters"] = result["Quarters"] + 1;
    } else if (roundedNum >= 10) {
      roundedNum = roundedNum - 10;
      result["Dimes"] = result["Dimes"] + 1;
    } else if (roundedNum >= 5) {
      roundedNum = roundedNum - 5;
      result["Nickels"] = result["Nickels"] + 1;
    } else {
      roundedNum = roundedNum - 1;
      result["Pennies"] = result["Pennies"] + 1;
    }
  }
  return result;
}
