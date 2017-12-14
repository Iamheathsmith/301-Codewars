function mutateMyStrings(stringOne, stringTwo){
  var arrOne = stringOne.split('');
  var arrTwo = stringTwo.split('');
  var test = '';
  for (let i in arrOne){
    if(!(arrOne[i] === arrTwo[i])) {
      test = test + arrOne.join('') + '\n';
      arrOne[i] = arrTwo[i];
    }
  }
  test = test + stringTwo + '\n'
  return test;
}
