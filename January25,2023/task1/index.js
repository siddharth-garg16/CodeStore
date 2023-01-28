//Area class to calculate area of different polygons- Task 1

class Area{
    square = (side) => {
        return side * side;
    }

    rectangle = (length, breadth) => {
        return length * breadth;
    }

    triangle = (sideA, sideB, sideC) => {
        let s = sideA + sideB + sideC / 2;
        return Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));
    }
}

let area = new Area();

console.log(area.square(9));
console.log(area.rectangle(13, 17));
console.log(area.triangle(11, 16, 21));
