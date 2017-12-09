function find_average(array) {
  let test = array.reduce((acc, curr) => acc + curr);
  let dog = test / array.length
  return dog;
}
