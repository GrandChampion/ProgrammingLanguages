# Programming Language Basics

## Python
### 1. If statement
```python
if x < 0 and y == True:
    x = 0
elif not x < 0 and y == True:
    x = 100
elif not (x < 0 and y == True):
    x = 1000
elif x == 0 or y == False:
    x = 0
else:
    x = 1
```
```
Comparison operator: ==, !=, >, <, >=, <= 
```
Logical operator
|Logic|Python|
|---|---|
|And|and|
|Or|or|
|Not|not|
---
### 2. For statement
#### 2.1 For Loop
```python
# Typical for loop
for i in range(5, 10, 2):
    print(i)
# print 5, 7, 9
```
```python
for i in range(5):
    print(i)
# print 0, 1, 2, 3, 4
```
```python
for i in range(3, 7):
    print(i)
# print 3, 4, 5, 6
```
#### 2.2 For-Each Loop
```python
alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
for i in alphabet:
    print(i)
# print a, b, c, d, e, f
```
---
### 3. While statement
```python
a = 0
while a < 5:
    print(a)
    a += 1
# print 0, 1, 2, 3, 4
```
---
### 4. Function
```python
def function1(a, b='default value1'):
    print(b)
    return b
```
---
### 5. Class
#### 5.1 Class declaration
```python
class theClass:
    # Class variable shared by all objects
    cnt = 0

    # Constructor
    def __init__(self):
        # Instance variable unique to each object
        self.city = 'Seoul'

    def function1(self, a):
        print(a)
```
#### 5.2 Object declaration
```python
object1 = theClass()
object1.function1(1)
```
### 6. Data type
- Number
  ```python
  # int
  room = 301
  # float
  temperature = 18.0
  ```
- Text
  ```python
  # str
  text = 'This is the sentence.'
  text[0]
  ```
- Sequence
  ```python
  # list
  alphabet = ['a', 'b', 'c']
  alphabet[0]

  # tuple
  water = ('H', '2', 'O')
  ```
- Mapping
  ```python 
  # dict
  rgb = {'red': 1, 'green': 1, 'blue': 255}
  rgb['red']
  ```
- Boolean
  ```python
  True
  False
  ```
---

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
## 5. Class
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
## 6. Data type
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
## Java
### 1. If statement
```Java
if (x > 0 && y == true) {
    System.out.println("Positive");
} else if (x == 0 || y != false) {
    System.out.println("Zero");
} else {
    System.out.println("Negative");
}
```
```
Comparison operator: ==, !=, >, <, >=, <=
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
```Java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Print: 0, 1, 2, 3, 4
```
#### 2.2 For-Each Loop
```Java
int[] numbers = { 0, 0, 1, 2, 3 };
for (int i : numbers) { // i's data type should be the same as elements in the list
    System.out.println(numbers[i]);
}
// Print: 0, 0, 0, 1, 2
```
---
### 3. While statement
#### 3.1 While Loop
```Java
int cnt = 0;
while (cnt < 5) {
    System.out.println(cnt);
    cnt++;
}
// 0, 1, 2, 3, 4
```
#### 3.2 Do-while loop
```Java
int cnt = 0;
do {
    System.out.println(cnt);
    cnt++;
} while (cnt < 5);
// 0, 1, 2, 3, 4
```
---
### 4. Function
```Java
public String message(int a) {
    return "" + a;
}
```
---
### 5. Class
Class declaration
```Java
public class Person {
    // field
    public String nationality;

    // constructor
    public Person(String countryOfBirth) {
        this.nationality = countryOfBirth;
    }

    // methods
    public void immigration(String country) {
        this.nationality = country;
    }
}
```
Object declaration
```Java
Person asian = new Person("Japan");
```
---
### 6. Data type
- int
  ```Java
  int number = 5;
  ```
- float
  ```Java
  float floatingNumber = 3.14f;
  ```
- char
  ```Java
  char alphabet = 'a';
  ```
- boolean
  ```Java
  boolean isFinished = true;
  ```
- String
  ```Java
  String text = "This is Java.";
  ```
- Array
  ```Java
  String[] course = { "cpsc 210", "cpsc 213", "cpsc 221", "stat 302" };
  ```
- ArrayList

  - Initialization        
    ```Java
    ArrayList<String> rgb = new ArrayList<String>();
    ```        
  - Adding element
    ```Java
    rgb.add("Red");
    rgb.add("Green");
    rgb.add("Blue");
    ```
  - Getting element
    ```Java
    rgb.get(0);
    rgb.get(1);
    rgb.get(2);
    // Red, Green, Blue
    ```