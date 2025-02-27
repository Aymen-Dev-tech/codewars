function translate(sentence) {
  const vowels = "aeiou";
  const punctuations = ",.!?:;";

  const strToPigLatin = (word) => {
    if (!isNaN(word)) return word;
    let match = word.match(/^([A-Za-z]+)([,.!?:;]*)$/);
    if (!match) return word;
    let [, str, punctuation] = match;
    let isUpperCase = str[0] === str[0].toUpperCase();
    str = str.toLowerCase();
    if (vowels.includes(str[0])) {
      str += "way";
    } else {
      let vowelIndex = str.split("").findIndex((char) => vowels.includes(char));
      if (vowelIndex === -1) {
        str += "ay";
      } else {
        str = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
      }
    }
    if (isUpperCase) str = str[0].toUpperCase() + str.slice(1);
    return str + punctuation;
  };
  return sentence.split(" ").map(strToPigLatin).join(" ");
}
