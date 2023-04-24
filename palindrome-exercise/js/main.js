function isPalindrome(word) {
  // Stringi ters çeviriyoruz
  const reverseWord = word.split("").reverse().join("");
  // Ters çevrilmiş string ile orijinal stringi karşılaştırıyoruz
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome("küllük")); // true
    

function _isPalindrome(str){
  let left = 0
  let right = str.length -1;

  while(left<right){
    if(str[left] !== str[right]){
      return false;

    }
    left ++;
    right --;
  }

  return true;
}

console.log(_isPalindrome("küllük"));