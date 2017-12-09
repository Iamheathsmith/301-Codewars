function filter_list(l) {
  let test = l.filter(dog => !dog.length);
  console.log('this is test:', test);
  return test;
  }
