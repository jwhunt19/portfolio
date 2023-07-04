---
title: '2620. Counter'
date: '2023-07-03'
description: 'Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called'
---

#### 2620. Counter
*Given an integer `n`, return a `counter` function. This `counter` function initially returns n and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).*

---

My solution:
```
var createCounter = function(n) {
    n -= 1
    return function() {
        return n += 1
    };
};
```

In my solution, I return a function that returns `n += 1` initially based off the
captured value of `n`. With how I return the function, it was always 1 off each call, 
so I needed to add `n -= 1` to initialize `n` at 1 lower.

With an input of: `n = 10, ["call","call","call"]`

The expected output would be: `[10,11,12]`

But I was getting `[11, 12, 13]` before adding the `n -= 1`. I thought there must
be a better way so I looked to other solutions to this problem and discovered
something I somehow never knew before about a very familiar operator. 

<br>

***The ++ Operator***

When using `++` following the variable instead of `+=1`, the initial returned 
value is the base number prior to interation. This would allow us to iterate 
correctly while returning `n` initially. 

Example of how `++` works.
```
let a = 1
let b = 1
let c = 1

a++ // 1
a++ // 2

b+=1 // 2
b+=1 // 3

// putting the ++ before the variable iterates first, acting similar to += 1
++c // 2
++c // 3
```
<br>

With this in mind, we can clean up our function a little bit. Taking into account
how `++` operates, we can now submit this as our solution:
```
var createCounter = function(n) {
    return function() {
        return n++
    };
};
```