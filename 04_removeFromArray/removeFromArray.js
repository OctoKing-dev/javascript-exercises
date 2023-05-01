const removeFromArray = function(array, ...values) {
  const results = [];
  for (let i=0; i < array.length; i++) {
    const value = array[i];
    if (!values.includes(value)) {
      results.push(value);
    }
  }

  return results;
};

// Do not edit below this line
module.exports = removeFromArray;
