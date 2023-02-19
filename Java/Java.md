## Java
### 1. If statement
#### 1.1 If/else if/else statement
```Java
if (x > 0 && y == true) {
    System.out.println("Positive");
} else if (x == 0 || y != false) {
    System.out.println("Zero");
} else {
    System.out.println("Negative");
}
```
#### 1.2 Ternary
```Java
int number = 3;
boolean isPositive = false;
isPositive = (number > 0) ? true : false;
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
---