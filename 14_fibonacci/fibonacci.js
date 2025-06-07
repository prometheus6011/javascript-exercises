const fibonacci = function(val) {
  if (val < 0) {
    return "OOPS";
  }

  if (typeof val === "string") {
    val = parseInt(val);
  }

  if (val <= 1) {
    return val;
  }

  let prev = 0;
  let curr = 1;
  for (let i = 1; i < val; ++i) {
    let temp = curr;
    curr += prev;
    prev = temp;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
