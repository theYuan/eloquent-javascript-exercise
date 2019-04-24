// Your code here.
function reverseArray(array){
	result = [];	
  	for(i=array.length-1;i>=0;i--){
    	result.push(array[i]);
    }
  	return (result);
}

function reverseArrayInPlace(array){
  	len = array.length;
	for(i=0;i<Math.floor(len/2);i++){
      	swap = array[i];
      	array[i] = array[len-1-i];
      	array[len-i-1] = swap;      	
    }
	return array;
}

console.log(reverseArray(["A", "B", "C"]));
// ¡ú ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ¡ú [5, 4, 3, 2, 1]