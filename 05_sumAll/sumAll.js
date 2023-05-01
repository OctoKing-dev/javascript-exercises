const sumAll = function(a, b) {
  // Must be a valid integer
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  // Neither number may be negative
  if (a < 0 || b < 0) return "ERROR";

  // Support a being greater than b, or the inverse
  let min = (a <= b) ? a : b;
  let max = (a >= b) ? a : b;

  let sum = 0;

  for (let i=min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
