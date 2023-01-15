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
```python3
Comparison operator: ==, !=, >, <, >=, <= 
```
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
