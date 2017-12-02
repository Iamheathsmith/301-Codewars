function capitalize(s){
  var testEven = s.split('');
  var testOdd = [];
  testOdd.push(testEven[0]);
  testEven[0] = testEven[0].toUpperCase();
  for (var i = 1; i < testEven.length;i++) {
    if (i % 2 === 0) {
      testOdd.push(testEven[i]);
      testEven[i] = testEven[i].toUpperCase();
    } else {
      testOdd[i] = testEven[i].toUpperCase();
    }
  }
  var sEven = testEven.join('');
  var sOdd = testOdd.join('');
  return [sEven, sOdd];
};
