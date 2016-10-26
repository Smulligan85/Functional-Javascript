function doubleAll(numbers) {
  var doubleArr = numbers.map(function(el) {
    return el*2;
  });
  return doubleArr;
}

module.exports = doubleAll;
