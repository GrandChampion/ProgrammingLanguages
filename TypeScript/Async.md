# Async+Await
## 1. Purpose
- We can use Web API space with simple syntax than Promise syntax 

## 2. Async function
- Async function returns Promise object
- Async function is producer's code
### 2.1 Producer's code
```javascript
httpResponseCode = 200
async function promGenerator() {
    if (httpResponseCode > 400) {
        return Promise.reject("Error")
    } else {
        return Promise.resolve("OK")
    }
}
```
### 2.2 Consumer's code
```javascript
promGenerator()
    .then(function (data) { console.log(data) })
    .catch(function (err) { console.log(err) })
```

## 3. Await
- We should always use 'await' in front of **function** call **that returns Promise**, **except for Promise constructor**
```javascript
async function usingString(){
    let result = await promGenerator() // String is generated
    console.log(result)
}
```
- However, **if we use default Promise object constructor inside function**, we don't need 'await' keyword
```javascript
function usingPromise() {
    let result = new Promise(function (f1, f2) { f1("Successfully processed") }) // Promise<String> is generated
    result.then(function (data) { console.log(data) })
}
```
## 4. Using Await instead of Promise
- await makes the code to wait until **Promise generating function** returns Promise object
```javascript
async function inUBC() {
    let inCanada = await Canada() // Passing "in Canada" to inCanada variabble
    let claimInCanadaAndInVancouver = await Vancouver(inCanada) // Passing "    in Vancouver" to claimInCanadaAndInVancouver variable
    let claimInVancouverAndInUBC = await UBC(claimInCanadaAndInVancouver) //Passing "       in UBC" to claimInVancouverAndInUBC variable
    console.log(claimInVancouverAndInUBC)
}
inUBC()
```
- In function that use 'await', there is no catch function, so we need to use try/catch block for handling the case that **Promise generating function"" returns **reject Promise object**
```javascript
async function inUBC() {
    try {
        let inCanada = await Canada()
        let claimInCanadaAndInVancouver = await Vancouver(inCanada)
        let claimInVancouverAndInUBC = await UBC(claimInCanadaAndInVancouver)
        console.log(claimInVancouverAndInUBC)
    } catch (e) {
        console.log(e)
    }
}
inUBC()
```
---