// Your code here.
function loop(val, test, update, body){
	while(test(val)){
    	body(val);
      	val = update(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// ¡ú 3
// ¡ú 2
// ¡ú 1