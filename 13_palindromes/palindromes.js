const palindromes = function(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] == " " || str[left] == "," || str[left] == "." || str[left] == "!") {
      ++left;
      continue;
    }
    if (str[right] == " " || str[right] == "," || str[right] == "." || str[right] == "!") {
      --right;
      continue;
    }
    if (str[left].toLowerCase() != str[right].toLowerCase()) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
