const palindromes = function (string) {
  const replaced = string.toUpperCase().replace(/[^A-Z]/g, "");
  const reversed = replaced.split('').reverse().join('');

  return replaced === reversed;
};

// Do not edit below this line
module.exports = palindromes;
