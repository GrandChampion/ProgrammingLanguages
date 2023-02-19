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
# Promise
## 1. Purpose
- **JavaScript is single threaded**, so in order to mimic the effect of multithread, JavaScript puts Asynchronous function to Web API space, which is like the **second thread**
![Asynchronous structure](/src/Asynchronous%20structure.png)
- Syntax is similar to try/catch block

## 2. Structure
### 2.1 Promise object
![Promise states](./src/Promise%20states.png)

### 2.2 Producer's code
- prom is a Promise object
```javascript
// f1 and f2 are parameter of the function in this case
httpResponseCode = 200
const prom = new Promise(function (f1, f2) {
    // f1: function that is executed when asynchronous function is successful (fulfilled)
    // f2: function that is executed when asynchronous function is unsuccessful (rejected)
    if (httpResponseCode > 400) {
        f2("Error") // String "Error" is returned
    } else {
        f1("OK") // String "OK" is returned
    }
})
```
- Producer code decides the promise object's state to be successful or unsuccessful using condition statement
- Promise constructor takes **1 argument**, which is a function
- This argument function decides **what will be returned when the promise instance will be successful or unsuccessful** based on condition statement of Producer code

### 2.3 Consumer's code
#### 2.3.1 then function
```javascript
// then function that takes 2 arguments, which are functions
prom.then(function (result) { console.log(result) }, function (error) { console.log(error) })
```
- then function takes **1 or 2 parameters**, which are both functions
- If promise object's state is 'fulfilled', then execute the 1st argument function
- If promise object's state is 'rejected', then execute the 2nd argument function
- then function can handle **both 'fulfilled' state and 'rejected' state**
#### 2.3.2 catch function
```javascript
prom.catch(function (error) {console.log(error)})
```
- catch function takes **only 1 parameter**, which is a function
- catch function can only handle **'rejected' state**
#### 2.3.3 finally function
- finally function is always executed regardless of the state of promise object
- finally function takes **only 1 parameter**, which is a function
- finally function's argument function don't take any parameter

#### 2.3.4 Combining then and catch function
![then+catch](src/then%2Bcatch.png)
- When we combine then and catch function, we can separate cases for 'fulfilled' and 'rejected' like if statement

### 3. Callback style vs Promise style
#### **3.1 Callback style**
- Passing callback function as argument to next function
```javascript
function Canada(f1) {
    setTimeout(function () {
        console.log("I am in Canada")
        f1()
    }, 1000)
}

function Vancouver(f1) {
    setTimeout(function () {
        console.log("   I am in Vancouver")
        f1()
    }, 1000)
}

function UBC(f1) {
    setTimeout(function () {
        console.log("           I am in UBC")
        f1()
    }, 1000)
}

Canada(function () { Vancouver(function () { UBC(function () { console.log("Finish") }) }) })
```
#### **3.2 Promise style**
- Passing fulfilled message to the next then function
- In this case, functions return Promise object
```javascript
function Canada() {
    return new Promise(function (f1, f2) {
        setTimeout(function () { f1("I am in Canada") }, 1000)
    })
}

function Vancouver(message) {
    console.log(message)
    return new Promise(function (f1, f2) {
        setTimeout(function () { f1("   I am in Vancouver") }, 1000)
    })
}

function UBC(message) {
    console.log(message)
    return new Promise(function (f1, f2) {
        setTimeout(function () { f1("       I am in UBC") }, 1000)
    })
}

Canada() // Canada pass "I am in Canada" to the next then function
    .then(function (data) { return Vancouver(data) }) // Vancouver pass "    I am in Vancouver" to the next then function
    .then(function (data) { return UBC(data) }) // UBC pass "       I am in UBC" to the next then function
    .then(function (data) { return console.log(data) })
    .finally(function () { console.log("Finished") })
```
---