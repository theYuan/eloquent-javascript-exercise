// using a loop
function every(array, test) {
  // Your code here.
  for(i=0;i<array.length;i++)
      if(test(array[i])==false)
          return false;
  return true;
}

//using the some method
function every(array, test) {
  if(array.some(element => !test(element))) {
    return false;
  } else {
    return true;
  }
}
console.log(every([1, 3, 5], n => n < 10));
// ¡ú true
console.log(every([2, 4, 16], n => n < 10));
// ¡ú false
console.log(every([], n => n < 10));
// ¡ú true