function cubeOdd(arr) {
  let total = 0;//a simple running total of all that pass the test below.
  for (let i in arr) {// looping over each item in arr
    let cubeNumb = (arr[i] * arr[i] * arr[i]);// doing the math to cube it
    console.log('this is totle before:', cubeNumb);
    if (isNaN(cubeNumb)) return undefined;// if its not a number, return undefined
    if (arr[i] % 2 !== 0 ) total += cubeNumb; //if its a number this finds out if its odd, then it adds it to total, and the next index that is a odd, it adds that value to total so its a running total
  }
  return total;
}
