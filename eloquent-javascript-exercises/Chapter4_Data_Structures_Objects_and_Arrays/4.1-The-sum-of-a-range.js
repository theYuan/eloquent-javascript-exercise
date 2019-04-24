// Your code here.
function range(start,end,step){
  	result = [];
	if(step==null&&start<end){
    	for(i=start;i<=end;i++){
          result.push(i);
        }
    }
  	else if(step==null&&start>end){
    	for(i=start;i>=end;i--){
    		result.push(i);
    	}        
    }
  	else if(step>0){
    	for(i=start;i<=end;i+=step){
       	  result.push(i);
        }
    }
  	else if(step<0){
    	for(i=start;i>=end;i+=step){
          result.push(i);
        }
    }
  	return(result);
}	

function sum(nums){
	result = 0;
  	for (let num of nums){
      	result+=num;
    }
  	return(result);
}

console.log(range(1, 10));
// ¡ú [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// ¡ú [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// ¡ú 55
console.log(range(6,3))