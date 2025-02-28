function order(words) {
  if (words === "") return words;
  const wordsToArr = words.split(" ");
  const orderedArr = new Array(wordsToArr.length).fill("");
  for (let i = 0; i < wordsToArr.length; i++) {
    const number = wordsToArr[i].match(/[1-9]/);
    orderedArr[number[0]] = wordsToArr[i];
  }
  return orderedArr.join(" ").trim();
}
