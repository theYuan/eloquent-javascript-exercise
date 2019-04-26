// Your code here.
class Vec {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  plus(obj){
	return new Vec(this.x+obj.x,this.y+obj.y);
  }
  
  minus(obj){
  	return new Vec(this.x-obj.x,this.y-obj.y);
  }
  get length() {
    return (Math.sqrt((this.x*this.x)+(this.y*this.y)));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// ¡ú Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// ¡ú Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// ¡ú 5