// Your code here.
function arrayToList(arr) {
    var len = arr.length;
    function addToList(depth) {
        if (depth >= len) return null;
        return {
            value: arr[depth],
            rest: addToList(depth+1)
        };
    }
    return addToList(0);
}

function listToArray(list) {
    function addToArray(arr, currList) {
        arr.push(currList.value);
        if (!currList.rest) return arr;
        return addToArray(arr, currList.rest);
    }
    return addToArray([], list);
}

function prepend(el, list) {
    return {
        value: el,
        rest: list
    };
}

function nth(list, depth) {
    if (depth) 
      return nth(list.rest, depth-1);
    return list.value;
}
console.log(arrayToList([10, 20]));
// ¡ú {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ¡ú [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ¡ú {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ¡ú 20