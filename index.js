function rot13(str){
   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   return str.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]);

}
console.log(rot13("SERR PBQR PNZC"));


