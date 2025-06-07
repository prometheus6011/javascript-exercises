const add = function(i1, i2) {
	return i1 + i2;
};

const subtract = function(i1, i2) {
	return i1 - i2;
};

const sum = function(arr) {
	let sum_ctr = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum_ctr += arr[i];
  }
  return sum_ctr;
};

const multiply = function(arr) {
  let mul_ctr = 1;
  for (let i = 0; i < arr.length; ++i) {
    mul_ctr *= arr[i];
  }
  return mul_ctr;
};

const power = function(base, pow) {
	let res = base;
  for (let i = 1; i < pow; ++i) {
    res *= base;
  }
  return res;
};

const factorial = function(val) {
	if (val <= 1) {
    return 1;
  }
  return val * factorial(val - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
