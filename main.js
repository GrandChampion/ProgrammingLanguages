class Point2D {
    xValue = 0;
    yValue = 0;
    static dimension = "2D";

    constructor(x, y) {
        this.xValue = x;
        this.yValue = y;
    }

    // Getter
    get getX() {
        return this.x;
    }

    // Setter1
    set changeX(newX) {
        this.x = newX;
    }
    // Setter2
    set changeY(newY) {
        this.y = newY;
    }

    // Method
    area() {
        return this.x * this.y;
    }

    // Static method
    static numberOfAxis() {
        return 2;
    }
}


console.log(Point2D.dimension);