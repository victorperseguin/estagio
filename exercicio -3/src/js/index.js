function inverterString() {
  let str = prompt("Digite uma palavra ...")
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  alert(invertedString);
  return invertedString;

}
