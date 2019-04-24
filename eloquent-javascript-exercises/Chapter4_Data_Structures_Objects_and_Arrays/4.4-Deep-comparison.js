// Your code here.
function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true
    } 
  	else if ((typeof val1 == 'object' && val1 != null) && (typeof val2 == 'object' && val2 != null)) {
        for (let val of Object.keys(val1)) {
            if (!val2.hasOwnProperty(val) || !deepEqual(val1[val], val2[val])) return false;
        }
        return true;
    } 
  	else return false
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ¡ú true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ¡ú false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ¡ú true