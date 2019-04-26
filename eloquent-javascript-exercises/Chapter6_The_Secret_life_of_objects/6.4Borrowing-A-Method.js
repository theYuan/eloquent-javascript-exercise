let map = {one: true, two: true, hasOwnProperty: true};
// Fix this call
//console.log(map.hasOwnProperty("one"));
// ¡ú true
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// ¡ú true