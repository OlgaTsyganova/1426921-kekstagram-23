function getRandom (min,max) {
  {
    if (max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return "Диапaзон может быть только положительным, включая ноль"
  }
}
console.log(getRandom (9,8));

function checkCommentLength (stringLength, maxLength) {
  if (stringLength <= maxLength) {
    return true;
  }
return false;
};
console.log(checkCommentLength(50, 140));
