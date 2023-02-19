## C++
- C++ should be compiled with g++ or clang++. And it cannot be compiled with gcc or clang.
- The output of C++ in VScode can be seen in debug console.
### 1. If statement
```c++
int targetNumber = 1;
if (targetNumber > 0)
{
    std::cout << "Positive Number" << std::endl;
}
else if (targetNumber < 0)
{
    std::cout << "Negative Number" << std::endl;
}
else
{
    std::cout << "Zero" << std::endl;
}
```
---
### 2. For statement
#### 2.1 For Loop
```c++
for (int i = 0; i < 5; i++)
{
    std::cout << i << std::endl;
}
```
#### 2.2 range for
```c++
int theList[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
for (int theNumber : theList)
{
    std::cout << theNumber << std::endl;
}
```
---
### 3. While statement
#### 3.1 While Loop
```c++
int i = 1;
while (i <= 5)
{
    std::cout << i << std::endl;
    i++;
}
```
#### 3.2 Do-while Loop
```c++
int i = 1;
do
{
    std::cout << i << std::endl;
    i++;
} while (i <= 5);
```
---
### 4. Function
Function Declaration
```c++
void add(int a, int b)
{
    std::cout << (a + b);
}
```
Function call
```c++
int main()
{
    add(10, 20);
    return 0;
}
```
Function prototype
- Originally, function declaration should be before main function.
- But when we prototype function before calling the function, we can call function after that.
```c++
void add(int, int);
```
---
### 5. Class
Class declaration
```c++
class theClass
{

private:
    int width = 7;
    int height;

public:
    int function1(int x, int y)
    {
        return x + y;
    }

    int getWidth()
    {
        return width;
    }

protected:
    int weight;
};
```
Instantiation
```c++
theClass theObject1;
std::cout << theObject1.getWidth() << std::endl;
```
### 6. Data type
- int
- float
- double
- char
- bool
- void
- Array
  ```c++
  int x[5] = {1, 2, 3, 4, 5};
  std::cout << x[0] << std::endl;
  ```
- vector \<data type>
  - should put standard library version at the args of tasks.json file
    ```json
    "args": [
        "-std=c++17"
    ]
    ```
  - Declaration
    ```c++
    vector<int> arrayList1 = {1, 2, 3, 4, 5};
    ```
  - append
    ```c++
    arrayList1.push_back(10);
    ```
- string
  - include directive
    ```c++
    #include <string>
    ```
  - declaration
    ```c++
    string text = "This is the sentence.";
    ```
- struct
  ```c++
  struct human
  {
      string name;
      int age;
  };
  
  int main()
  {
      human James;
      James.name = "James";
      James.age = 20;
  
      return 0;
  }
  ```