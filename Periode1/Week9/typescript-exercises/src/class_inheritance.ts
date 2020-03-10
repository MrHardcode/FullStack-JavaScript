abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;
    get color(): string {
        return this._color;
    };
    set color(newColor: string) {
        this._color = newColor;
    };
    toString(): string {
        return `\tShape color: ${this._color}
        Area: ${this.area}
        Perimeter: ${this.perimeter}
        `
    }
}

//const shape = new Shape("red"); - Cannot create instance of abstract class

class Circle extends Shape {
    _radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this._radius = radius;
    }
    get area(): number {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    get perimeter(): number {
        return 2 * Math.PI * this._radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
    toString(): string {
        return `\tCircle color: ${this.color}
        Area: ${this.area}
        Perimeter: ${this.perimeter}
        Radius: ${this._radius}
        `
    }
}

const circle = new Circle("Red", 3);
circle.radius = 4;
circle.color = "Lilac";
console.log(circle.toString());

class Cylinder extends Circle {
    _height: number;
    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this._height = height;
    }
    get perimeter(): number {
        throw new Error("Method not implemented.");
    }
    get volume(): number {
        return this.area * this._height;
    }
    get height(): number {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }
    toString(): string {
        return `\tCylinder color: ${this.color}
        Volume: ${this.volume}
        Height: ${this._height}
        Radius: ${this._radius}`
    }
}

const cylinder = new Cylinder("Blue", 3, 2);
cylinder.height = 2.5;
console.log(cylinder.toString());