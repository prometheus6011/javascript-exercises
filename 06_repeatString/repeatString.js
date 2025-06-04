const repeatString = function(str, i) {
  if (i < 0) {
    return "ERROR";
  }
  let res = "";
  for (let iter = 0; iter < i; ++iter) {
    res += str;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
