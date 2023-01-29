## TypeScript
### 1. If statement
#### 1.1 If/else if/else statement
```TypeScript
if (x < 0) {
    console.log("Negative number");
} else if (x == 0) {
    console.log("Zero");
} else {
    console.log("Positive number")
}
```
#### 1.2 Ternary
```TypeScript
x > 0 ? console.log('Positive') : console.log('Negative');
```
```
Comparison operator: ==, ===, !=, !==, >, <, >=, <=
```
Logical operator
|Logic|TypeScript|
|---|---|
|And|&&|
|Or|\|\||
|Not|!|
---
### 2. For statement
#### 2.1 For Loop
```TypeScript
for (let i: number = 0; i < 5; i++) {
    console.log(i);
}
```
#### 2.2 For-Of Loop
```TypeScript
let theArray: number[] = [2, 4, 6, 8];

for (let evenNumber of theArray) {
    console.log(evenNumber);
}
```
#### 2.3 For-In Loop
```TypeScript
let theArray: number[] = [2, 4, 6, 8];

for (let index in theArray) {
    console.log(theArray[index]);
}
```
---
### 3. While statement
#### 3.1 While Loop
```TypeScript
let cnt: number = 1;
while (cnt < 4) {
    console.log(cnt);
    cnt++;
}
```
#### 3.2 Do-while Loop
```TypeScript
let cnt: number = 1;
do {
    console.log(cnt);
    cnt++;
} while (cnt < 4);
```
---
### 4. Function
#### 4.1 Named function
```TypeScript
function message(text: string, order: number): string {
    return (order + ". " + text);
}
console.log(message("Order", 1));
```

#### 4.2 Anonymous function
```TypeScript
let message = function (order: number, text: string): string {
    return order + ". " + text;
}
console.log(message(10, "Follow the rule"));
```

#### 4.3 Arrow function
```TypeScript
let addition = (o1: number, o2: number): number => {
    return o1 + o2;
}
console.log(addition(1, 2));
```
---
### 5. Class
```TypeScript
class Human {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
}

let Mark = new Human("Mark Zuckerberg", 38);
```
---
### 6. Data type
- boolean
  ```TypeScript 
  let isFinished: boolean = true;
  isFinished = false;
  ```
- number
  ```TypeScript
  let decimal: number = 6;
  ```
- string
  ```TypeScript
  let color: string = "blue";
  color = 'red';
  ```
- list
  - Regular list
    ```TypeScript
    let list: number[] = [1, 2, 3];
    ```
  - Generic list
    ```TypeScript
    let stringList: Array<string> = ["one", "two", "three"];
    ```
- enum
  ```TypeScript
  enum RGB {
      Red, Green, Blue,
  }
  let color2: RGB = RGB.Green;
  ```
- unknown
  ```TypeScript
  let data: unknown = 4;
  data = "maybe a string instead";
  data = false;
  ```
- undefined
  ```TypeScript
  let u: undefined = undefined;
  ```
- any
  ```TypeScript
  let data: any = 4;
  ```
---
## JavaScript
### 1. If statement
#### 1.1 if/else if/else statement
```javascript
let k = 30;
if (k > 0) {
    console.log("positive");
} else if (k === 0) {
    console.log("zero");
} else {
    console.log("negative");
}
```
#### 1.2 Ternary
```javascript
let k = 30;
console.log(k > 0 ? "positive" //if statement
    : k === 0 ? "zero" //else if statement
        : "negative"); //else statement
```
---
### 2. For loop
#### 2.1 For loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
#### 2.2 For-of loop
```javascript
const words = ['1. Text', '2. Another Text', '3. Other Texts'];

for (const word of words) {
    console.log(word);
}
```
#### 2.3 For-in loop
```javascript
const numbers = ["one", "two", "three"];

for (let i in numbers) { //i is the index
    console.log(i);
}
```
---
### 3. While loop
#### 3.1 While Loop
```javascript
let i = 1;
while (i < 5) {
    i += 1;
}
```
#### 3.2 Do-while
```javascript
let i = 0;
do {
    i += 1;
} while (i > 0 && i < 5);
```
---
### 4. Function
#### 4.1 Normal function
```javascript
function addition(a, b) {
    return a + b;
}
```
#### 4.2 Function expression
```javascript
const subtraction = function (a, b) {
    return a - b;
}
```
#### 4.3 Arrow function
```javascript
const multiplication = (a, b) => a * b;
```
---

### 5. Class
#### 5.1 Class definition
```javascript
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
```
#### 5.2 Instantiation
```javascript
let object1 = new Point2D(3, 4);
```
#### 5.3 Using getter
- Getter shouldn't have '()'
```javascript
console.log(object1.getX);
```
#### 5.4 Using setter
- Setter uses assignment
```javascript
object1.changeX = 5;
```
#### 5.5 Using method
```javascript
console.log(object1.area());
```
#### 5.6 Using static field
```javascript
console.log(Point2D.dimension);
```
#### 5.7 Using static method
```javascript
Point2D.numberOfAxis()
```
---
### 6. Data type
- Null
- undefined
- Boolean
- Number
- BigInt
- String
- Symbol
- Array
```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
fruits[3] = "watermelon"
```
```javascript
let courses = new Array("Math", "CPSC", "Stat");
```
---