//Access Modifiers in JS

class Coordinate {
    #x = 2;
    #y = 3;
    //variables or object properties declared with # before the name are treated as private variables or else they are treated as public variables

    showCoordinates(){
        console.log(this.#x, this.#y);
    }
}

let point = new Coordinate();

point.showCoordinates();  //consoles the object property - x(2) and y(3)
console.log(point.#x); //throws an error that private memeber cannot be accesssed outside the enclosed class