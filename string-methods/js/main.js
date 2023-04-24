function tersCevir(str) {
  let yeniStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    yeniStr += str[i];
  }
  return yeniStr;
}

// Örnek kullanım
console.log(tersCevir(" dal kalkar kartal sarkar kartal sarkar dal kalkar "));
