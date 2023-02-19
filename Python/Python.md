## Python
### 1. If statement
#### 1.1 If/else if/else statement
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
#### 1.2 Ternary
```Python
theNumber = 3
text = 'It is positive' if (theNumber > 0) else 'It is negative'
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
  - str is immutable
  ```python
  # str
  text = 'This is the sentence.'
  text[0]
  ```
- Boolean
  ```python
  True
  False
  ```
- 1) List
  - List is mutable
  ```python
  # list
  alphabet = ['a', 'b', 'c']
  alphabet[0]
  alphabet.insert(2,'g') # insert 'g' to index 2
  ```
  #### Sorting list
  ##### 1.1 sorting str
  ```python
  fruit = ["banana", "apple", "pear", "watermelon"]
  fruit.sort(key=lambda x: x[0])  # sort based on first alphabet
  fruit.sort(key=lambda x: len(x))  # sort based on length of element
  ```
  ##### 1.2 sorting hash map
  ```python
  RGB = {'red': 20, 'green': 1, 'blue': 255}
  sortedRGB = sorted(RGB.items(), key=lambda x: x[0])  # sort based on key
  sortedRGB = sorted(RGB.items(), key=lambda x: x[1])  # sort based on value
  ```
  ##### 1.3 sorting tuple
  ```python
  tupleList = [(2, 1, 7), (3, 4, 4), (4, 1, 5)]
  sortedTuples = sorted(tupleList, key=lambda x: x[0]) # sort based on the 1st element of tuple
  sortedTuples = sorted(tupleList, key=lambda x: x[1]) # sort based on the 2nd element of tuple
  sortedTuples = sorted(tupleList, key=lambda x: x[2]) # sort based on the 3rd element of tuple
  ```
- 2) Stack
  ```python
  stack1 = []
  stack1.append(3)  # push 3
  stack1.append(5)  # push 5
  stack1.pop() # pop 5
  ```
- 3) 2D List
  - 2D List is mutable
  ```python
  twoDArray = [[1, 0, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 1, 0],
               [0, 0, 0, 1]]
  ```
- 4) Queue
  - Queue is mutable
  ```python
  queue1 = deque()
  queue1.append(3)
  queue1.append(5)
  print(queue1)
  queue1.popleft()
  print(queue1)
  ```
- 5) Set (unordered collection with no duplicate elements)
  - Set is mutable
  ```python
  RGB = {'Red', 'Green', 'Blue', 'Blue'}
  print(RGB)
  # Print {'Red', 'Green', 'Blue'}
  ```
- 6) Hash Map (Dictionary)
  - Hash Map is mutable
  ```python 
  # (Hash) Map
  rgb = {'red': 1, 'green': 1, 'blue': 255}
  rgb['brown'] = 30
  rgb['green']
  ```
- 7) Tuple
  - Tuple is immutable
  ```
  # tuple
  water = ('H', '2', 'O')
  ```
- 8) Heap
  Heap mutable
  ```python
  import heapq

  theMinHeap = []
  heapq.heappush(theMinHeap, 5)
  heapq.heappush(theMinHeap, 4)
  heapq.heappush(theMinHeap, 6)
  heapq.heappush(theMinHeap, 7)
  heapq.heappush(theMinHeap, 1)
  heapq.heappush(theMinHeap, 2)
  print(theMinHeap[2])
  heapq.heappop(theMinHeap)
  ```
---