// Your code here.
function isEven(a){
  
  if(a==0)
    return true;
  if(a==1)
    return false;
  if(a>1)
  	return isEven(a-2)
  else
    console.log("WrongType")
}

console.log(isEven(50));
// �� true
console.log(isEven(75));
// �� false
console.log(isEven(-1));
// �� ??