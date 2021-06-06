function getRandom (min,max) {
  if (min < max) {
    min = min >= 0 ? min : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 'Диапaзон может быть только положительным, включая ноль';
}

getRandom (9,8);

function checkStringMaxLength (string, maxLength) {
  return string.length <= maxLength;
}
checkStringMaxLength('I am going to eat', 140);
